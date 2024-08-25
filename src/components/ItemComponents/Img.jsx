import './Img.css'

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
      <div className="img-container">
        <img src={value} alt="Img placeholder" />
      </div>
    </td>
  )
}

export default Img