const OperationDisplay = ({ operation }) => {
  return (
    <p>
      Operation: {operation} (represented by {
        operation === "Parentheses" ?
          '()'
          : operation === "Exponents" ?
            '^n'
            : operation === "Multiplication" ?
              'x'
              : operation === "Division" ?
                '/'
                : operation === "Addition" ?
                  '+'
                  : '-'
      })
    </p>
  )
}

export default OperationDisplay