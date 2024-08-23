

const Img = ({ imgURL, inEditMode }) => {
  return inEditMode ? (
    <td>
      <input
        type="text"
        placeholder="Image URL"
      />
    </td>
  ) : (
    <td>
      <img src={imgURL} alt="Img placeholder" width="200px" />
    </td>
  )
}

export default Img