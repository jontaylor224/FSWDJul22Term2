import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = ({ full = false }) => {
  return (
    <div className={`${full ? 'full-page-spinner' : 'spinner'}`}>
      <FaSpinner />
    </div>
  )
}

export default LoadingSpinner