

const AddItemButton = ({ addFunc }) => {
  return (
    <tr>
      <td colSpan={6}>
        <button onClick={addFunc}>Add Item</button>
      </td>
    </tr>
  )
}

export default AddItemButton