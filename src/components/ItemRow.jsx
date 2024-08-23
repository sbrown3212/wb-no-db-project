import EditButton from './ItemComponents/EditButton.jsx'
import Img from './ItemComponents/Img.jsx'
import ItemName from './ItemComponents/ItemName.jsx'
import ItemPrice from './ItemComponents/ItemPrice.jsx'
import ItemCategory from './ItemComponents/ItemCategory.jsx'
import DeleteButton from './ItemComponents/DeleteButton.jsx'
import { useState } from 'react'

const ItemRow = ({ itemData, deleteFunc }) => {
  const [editMode, setEditMode] = useState(true);
  const [imgURL, setImageURL] = useState(itemData.imgURL);
  const [itemName, setItemName] = useState(itemData.itemName);
  const [itemURL, setItemURL] = useState(itemData.itemURL);
  const [itemPrice,setItemPrice] = useState(itemData.itemPrice);
  const [itemCategory, setItemCategory] = useState(itemData.itemCategory);

  return (
    <tr>
      <EditButton
        inEditMode={editMode}
      />
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
      <DeleteButton
        deleteFunc={deleteFunc}
        inEditMode={editMode}
      />
    </tr>
  )
}

export default ItemRow