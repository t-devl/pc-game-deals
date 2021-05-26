import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Deals from "./components/Deals";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/deals/:id" component={Deals}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
