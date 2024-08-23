

const DeleteButton = ({ deleteFunc }) => {
  return (
    <td>
      <button onClick={deleteFunc}>Delete</button>
    </td>
  )
}

export default DeleteButton