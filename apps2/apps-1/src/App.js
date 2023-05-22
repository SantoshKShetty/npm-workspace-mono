import logo from './logo.svg';
import loadPosts from '@common/service-json-pl-posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={loadPosts}>Load posts</button>
    </div>
  );
}

export default App;
