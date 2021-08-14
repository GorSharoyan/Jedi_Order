import React from "react";
import { Link } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SwitchRouter from "./components/Routes/SwitchRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <SwitchRouter />
      <Link to="/">Home</Link>
      <Footer />
    </div>
  );
}

export default App;
