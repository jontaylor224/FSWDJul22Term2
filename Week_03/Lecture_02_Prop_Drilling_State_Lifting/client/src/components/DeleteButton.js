import './DeleteButton.css'

const DeleteButton = ({ deleteFunction, children }) => {
  return (
    <button className="delete" onClick={deleteFunction}>{children}</button>
  )
}

export default DeleteButton