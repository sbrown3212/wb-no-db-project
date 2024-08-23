import { useEffect, useState } from "react"
import TableHeader from "./TableHeader"
import ItemRow from "./ItemRow"
import AddItemButton from "./ItemComponents/AddItemButton"
import axios from "axios"

const WishlistTable = ({ initialData }) => {
  const [currentData, setCurrentData] = useState(initialData);

  // Set 'currentData' to 'initialData' anytime 'initialData' changes
  useEffect(() => {
    setCurrentData(initialData);
  }, [initialData]);

  // Create array of 'itemRow' components based on data from 'currentData'
  const itemRows = currentData.map((item) => {
    return (
      <ItemRow
        key={item.id}
        imgURL={item.imgURL}
        itemName={item.itemName}
        itemURL={item.itemURL}
        itemPrice={item.itemPrice}
        itemCategory={item.itemCategory}
        deleteFunc={() => deleteItem(item.id)}
      />
    );
  });

  // Makes DELETE API call to delete item based on item id
  const deleteItem = (id) => {
    axios.delete(`/api/deleteItem/${id}`)
    .then((res) => {
      console.log(res.data); // Not showing in console
      setCurrentData(res.data.updatedItems);
    });
  };

  // Makes POST API call to add new item to wishlist
  // QUESTION: For the project requirements, I am using post, but is it necessary to be sending an object? I mean, why not have the server create an object with blank values rather than send it over in a POST request?
  const addItem = () => {
    const newItem = {
      imgURL: '',
      itemName: '',
      itemURL: '',
      itemPrice: '',
      itemCategory: ''
    }

    // Make POST request and set currentData to DATA array received in response
    axios.post('/api/addItem', newItem)
    .then((res) => {
      console.log(`res.data`, res.data);
      setCurrentData(res.data.updatedItems);
    })
  }

  return (
    <>
      WishlistTable
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {/* <ItemRow />
          <ItemRow />
          <ItemRow /> */}
          {itemRows}
        </tbody>

        <tfoot>
          <AddItemButton addFunc={addItem} />
        </tfoot>
      </table>
    </>
  )
}

export default WishlistTable