import "./App.css";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from "./pages/restaurants";

function App() {
  return (
    <>
      <Filter />
      <Restaurants />
    </>
  );
}

export default App;
