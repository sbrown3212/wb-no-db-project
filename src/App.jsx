import { useState, useEffect } from 'react'
import './App.css'
import WishlistTable from './components/WishlistTable'
import axios from 'axios';

const App = () => {
  // Establish state for itemData as empty array
  const [itemData, setItemData] = useState([]);

  // Sets document title
  useEffect(() => {
    document.title = "Wishlist App";
  }, [])

  // Get itemData from server only once and set response data to itemData
  useEffect(() => {
    axios.get('/api/items')
    .then((response) => {
      // console.log(`RESPONSE DATA:`, response.data)
      setItemData(response.data.items);
    })
  }, [])

  return (
    <>
      <WishlistTable initialData={itemData}/>
    </>
  )
}

export default App
