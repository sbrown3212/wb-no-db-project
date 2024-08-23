import EditButton from './ItemComponents/EditButton.jsx'
import Img from './ItemComponents/Img.jsx'
import ItemName from './ItemComponents/ItemName.jsx'
import ItemPrice from './ItemComponents/ItemPrice.jsx'
import ItemCategory from './ItemComponents/ItemCategory.jsx'
import DeleteButton from './ItemComponents/DeleteButton.jsx'

const TableRow = () => {
  return (
    <tr>
      <EditButton />
      <Img />
      <ItemName />
      <ItemPrice />
      <ItemCategory />
      <DeleteButton />
    </tr>
  )
}

export default TableRow