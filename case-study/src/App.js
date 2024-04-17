import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";
import FurumaServiceList from "./component/FurumaServiceList";

function App() {
  return (
    <>
      <Header></Header>
      <FurumaServiceList></FurumaServiceList>
    </>
  );
}

export default App;
