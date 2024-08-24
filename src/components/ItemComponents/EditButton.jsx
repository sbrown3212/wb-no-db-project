

const EditButton = ({ inEditMode, toEditFunc, toSavedFunc }) => {
  return inEditMode ? (
    <td>
      <button onClick={toSavedFunc}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={toEditFunc}>Edit</button>
    </td>
  )
}

export default EditButton