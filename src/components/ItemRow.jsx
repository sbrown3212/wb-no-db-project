import EditButton from './ItemComponents/EditButton.jsx'
import Img from './ItemComponents/Img.jsx'
import ItemName from './ItemComponents/ItemName.jsx'
import ItemPrice from './ItemComponents/ItemPrice.jsx'
import ItemCategory from './ItemComponents/ItemCategory.jsx'
import DeleteButton from './ItemComponents/DeleteButton.jsx'

const ItemRow = ({ imgURL, itemName, itemURL, itemPrice, itemCategory, deleteFunc }) => {
  return (
    <tr>
      <EditButton />
      <Img imgURL={imgURL} />
      <ItemName itemName={itemName} itemURL={itemURL} />
      <ItemPrice itemPrice={itemPrice} />
      <ItemCategory itemCategory={itemCategory} />
      <DeleteButton deleteFunc={deleteFunc} />
    </tr>
  )
}

export default ItemRow