

const Img = ({ value, inEditMode, setImageURL }) => {
  return inEditMode ? (
    <td>
      <input onChange={(e) => setImageURL(e.target.value)}
        value={value}
        type="text"
        placeholder="Image URL"
      />
    </td>
  ) : (
    <td>
      <img src={value} alt="Img placeholder" width="200px" />
    </td>
  )
}

export default Img