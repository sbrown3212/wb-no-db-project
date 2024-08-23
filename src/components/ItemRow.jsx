import EditButton from './ItemComponents/EditButton.jsx'
import Img from './ItemComponents/Img.jsx'
import ItemName from './ItemComponents/ItemName.jsx'
import ItemPrice from './ItemComponents/ItemPrice.jsx'
import ItemCategory from './ItemComponents/ItemCategory.jsx'
import DeleteButton from './ItemComponents/DeleteButton.jsx'
import { useState } from 'react'

const ItemRow = ({ imgURL, itemName, itemURL, itemPrice, itemCategory, deleteFunc }) => {
  const [editMode, setEditMode] = useState(true);

  return (
    <tr>
      <EditButton
        inEditMode={editMode}
      />
      <Img
        imgURL={imgURL}
        inEditMode={editMode}
      />
      <ItemName
        itemName={itemName}
        itemURL={itemURL}
        inEditMode={editMode}
      />
      <ItemPrice
        itemPrice={itemPrice}
        inEditMode={editMode}
      />
      <ItemCategory
        itemCategory={itemCategory}
        inEditMode={editMode}
      />
      <DeleteButton
        deleteFunc={deleteFunc}
        inEditMode={editMode}
      />
    </tr>
  )
}

export default ItemRow