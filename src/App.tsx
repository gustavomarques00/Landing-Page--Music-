import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header/Header";
import { MainTexts } from "./components/MainTexts/MainTexts";
import { MainImages } from "./components/MainImages/MainImages";

function App() {
  return (
    <ThemeProvider breakpoints={["xl", "lg", "md", "sm"]}>
      <div style={{ background: "#010101", minHeight: "100vh" }}>
        <Header />
        <MainTexts/>
        <MainImages />
      </div>
    </ThemeProvider>
  );
}

export default App;
