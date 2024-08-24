

const ItemCategory = ({ value, inEditMode, setItemCategory }) => {
  return inEditMode ? (
    <td>
      <input onChange={(e) => setItemCategory(e.target.value)}
        value={value}
        type="text"
        placeholder="Category"
      />
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default ItemCategory