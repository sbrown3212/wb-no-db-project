

const AddItemButton = ({ addFunc }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4}>
        <button onClick={addFunc}>AddItemButton</button>
      </td>
    </tr>
  )
}

export default AddItemButton