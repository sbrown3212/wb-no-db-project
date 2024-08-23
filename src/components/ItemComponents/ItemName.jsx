

const ItemName = ({ itemName, itemURL }) => {
  return inEditMode ? (
    <td>
      <input
        type="text"
        placeholder="Name"
      />
      <input
        type="text"
        placeholder="Item URL"
      />
    </td>
  ) :(
    <td>
      <a href={itemURL}>{itemName}</a>
    </td>
  )
}

export default ItemName