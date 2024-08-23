

const ItemCategory = ({ itemCategory, inEditMode }) => {
  return inEditMode ? (
    <td>
      <input
        type="text"
        placeholder="Category"
      />
    </td>
  ) : (
    <td>{itemCategory}</td>
  )
}

export default ItemCategory