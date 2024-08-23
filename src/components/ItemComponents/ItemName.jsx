

const ItemName = ({ itemName, itemURL }) => {
  return (
    <td>
      <a href={itemURL}>{itemName}</a>
    </td>
  )
}

export default ItemName