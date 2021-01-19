import { Route } from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <Route exact path={'/'}>
      <div className="page">
        <Header/>
        <Footer/>
      </div>
    </Route>

  );
}

export default App;
