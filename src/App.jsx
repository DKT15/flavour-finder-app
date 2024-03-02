import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./components/jumbotron";
import Filter from "./components/Filter";
import Restaurants from "./pages/restaurants";


function App() {
  return (
    <>
      <Jumbotron/>
      <Filter />
      <Restaurants />
    </>
  );
}

export default App;
