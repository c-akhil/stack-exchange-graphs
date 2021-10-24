import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './pages/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Layout />
      <ToastContainer position="bottom-center"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable />
    </div>
  );
}

export default App;
