import EditButton from './ItemComponents/EditButton.jsx'
import Img from './ItemComponents/Img.jsx'
import ItemName from './ItemComponents/ItemName.jsx'
import ItemPrice from './ItemComponents/ItemPrice.jsx'
import ItemCategory from './ItemComponents/ItemCategory.jsx'
import DeleteButton from './ItemComponents/DeleteButton.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ItemRow = ({ itemData, deleteFunc }) => {
  // Create states for item row fields
  const [editMode, setEditMode] = useState(!itemData.isInitialized); // if item hasn't been initialized, populate item in edit mode
  const [imgURL, setImageURL] = useState(itemData.imgURL);
  const [itemName, setItemName] = useState(itemData.itemName);
  const [itemURL, setItemURL] = useState(itemData.itemURL);
  const [itemPrice,setItemPrice] = useState(itemData.itemPrice);
  const [itemCategory, setItemCategory] = useState(itemData.itemCategory);

  // Create functions to handle edit mode buttons
  // When edit button is clicked, set 'editMode' to true
  const toEditMode = () => setEditMode(true);
  // When save button is clicked:
  const toSavedMode = () => {
    // Create object with current data of item row
    const newObj = {
      id: itemData.id,
      imgURL,
      itemName,
      itemURL,
      itemPrice,
      itemCategory
    };

    // Axios PUT request to update
    axios.put('/api/editItem', newObj)
    // Set respective states to values returned in response.data
    .then((res) => {
      setImageURL(res.data.updatedItem.imgURL);
      setItemName(res.data.updatedItem.itemName);
      setItemURL(res.data.updatedItem.itemURL);
      setItemPrice(res.data.updatedItem.itemPrice);
      setItemCategory(res.data.updatedItem.itemCategory);

      // Set 'editMode' back to false
      setEditMode(false);
    })
  }

  return (
    <tr>
      <Img
        value={imgURL}
        inEditMode={editMode}
        setImageURL={setImageURL}
      />
      <ItemName
        value={itemName}
        itemURL={itemURL}
        inEditMode={editMode}
        setItemName={setItemName}
        setItemURL={setItemURL}
      />
      <ItemPrice
        value={itemPrice}
        inEditMode={editMode}
        setItemPrice={setItemPrice}
      />
      <ItemCategory
        value={itemCategory}
        inEditMode={editMode}
        setItemCategory={setItemCategory}
      />
      <EditButton
        inEditMode={editMode}
        toEditFunc={toEditMode}
        toSavedFunc={toSavedMode}
      />
      <DeleteButton
        deleteFunc={deleteFunc}
        inEditMode={editMode}
      />
    </tr>
  )
}

export default ItemRow