import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <main>
        <nav>
          <Container maks="leskin" className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

// export default App;
