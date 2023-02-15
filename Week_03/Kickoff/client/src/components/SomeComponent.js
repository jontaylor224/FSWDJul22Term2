import OperationDisplay from "./OperationDisplay"

const SomeComponent = ({ mnemonic, operation }) => {
  return (
    <li>
      <p>Mnemonic Term: {mnemonic}</p>
      <OperationDisplay operation={operation} />
    </li>
  )
}

export default SomeComponent