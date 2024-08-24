

const ItemName = ({ value, itemURL, inEditMode, setItemName, setItemURL }) => {
  return inEditMode ? (
    <td>
      <input onChange={(e) => setItemName(e.target.value)}
        value={value}
        type="text"
        placeholder="Name"
      />
      <input onChange={(e) => setItemURL(e.target.value)}
        value={itemURL}
        type="text"
        placeholder="Item URL"
      />
    </td>
  ) :(
    <td>
      <a href={itemURL}>{value}</a>
    </td>
  )
}

export default ItemName