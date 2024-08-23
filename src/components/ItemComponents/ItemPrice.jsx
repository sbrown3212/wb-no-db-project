

const ItemPrice = ({ itemPrice, inEditMode }) => {
  return inEditMode ? (
    <td>
      <input
        type="text"
        placeholder="Price"
      />
    </td>
  ) : (
    <td>${itemPrice}</td>
  )
}

export default ItemPrice