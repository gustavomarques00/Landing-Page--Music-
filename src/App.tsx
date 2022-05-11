import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Header } from "./components/Header/Header";
import { MainTexts } from "./components/MainTexts/MainTexts";
import { MainImages } from "./components/MainImages/MainImages";
import { TrendingMusic } from "./components/TrendingMusic/TrendingMusic";
import { SomeArtists } from "./components/SomeArtists/SomeArtists";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider breakpoints={["xl", "lg", "md", "sm"]}>
      <div style={{ background: "#010101", minHeight: "100vh", overflow: "hidden" }}>
        <Header />
        <MainTexts/>
        <MainImages />
        <TrendingMusic/>
        <SomeArtists/>
        <Carousel>
      </div>
    </ThemeProvider>
  );
}

export default App;
