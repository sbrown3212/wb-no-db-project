

const ItemCategory = ({ itemCategory }) => {
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