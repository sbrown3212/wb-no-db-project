

const ItemPrice = ({ value, inEditMode, setItemPrice }) => {
  return inEditMode ? (
    <td>
      <input onChange={(e) => setItemPrice(e.target.value)}
        type="text"
        placeholder="Price"
      />
    </td>
  ) : (
    <td>${value}</td>
  )
}

export default ItemPrice