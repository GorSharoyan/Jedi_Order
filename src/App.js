import SwitchRouter from "./components/Routes/SwithcRouter";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;
