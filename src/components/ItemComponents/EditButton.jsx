

const EditButton = () => {
  return inEditMode ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button>Edit</button>
    </td>
  )
}

export default EditButton