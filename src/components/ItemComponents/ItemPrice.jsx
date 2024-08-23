

const ItemPrice = ({ itemPrice }) => {
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