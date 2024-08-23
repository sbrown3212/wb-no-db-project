

const DeleteButton = ({ deleteFunc }) => {
  return (
    <td>
      <button onClick={deleteFunc}>DeleteButton</button>
    </td>
  )
}

export default DeleteButton