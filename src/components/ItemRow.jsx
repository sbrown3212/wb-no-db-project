import EditButton from './EditButton.jsx'
import Img from './Img.jsx'
import ItemName from './ItemName.jsx'
import ItemPrice from './ItemPrice.jsx'
import ItemCategory from './ItemCategory.jsx'
import DeleteButton from './DeleteButton.jsx'

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