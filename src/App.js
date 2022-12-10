import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to="/users">User page</Link>
          </button>
          <button>
            <Link to="/admin">Admin page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
