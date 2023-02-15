import './App.css';
import DeleteRequest from './components/DeleteRequest';
import GetNoParams from './components/GetNoParams';
import GetWithParams from './components/GetWithParams';
import PostRequest from './components/PostRequest';
import PutRequest from './components/PutRequest';

function App() {
  return (
    <div className="App">
      <GetNoParams />
      <GetWithParams />
      <PostRequest />
      <PutRequest />
      <DeleteRequest />
    </div>
  );
}

export default App;
