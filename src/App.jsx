import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
// import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </React.Fragment>
  );
};

// export default App;
