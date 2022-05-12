import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Header } from "./components/Header/Header";
import { MainTexts } from "./components/MainTexts/MainTexts";
import { MainImages } from "./components/MainImages/MainImages";
import { TrendingMusic } from "./components/TrendingMusic/TrendingMusic";
import { SomeArtists } from "./components/SomeArtists/SomeArtists";
import { Artists } from "./components/Artists/Artists";
import { ArtistsP2 } from "./components/ArtistsP2/ArtistsP2";
import { Genres } from "./components/Genres/Genres";
import { Testimony } from "./components/Testimony/Testimony";
import { DownloadApp } from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <ThemeProvider breakpoints={["xl", "lg", "md", "sm"]}>
      <div style={{ background: "#010101", minHeight: "100vh", overflow: "hidden" }}>
        <Header />
        <MainTexts/>
        <MainImages />
        <TrendingMusic/>
        <SomeArtists/>
        <Artists />
        <ArtistsP2 />
        <Genres />
        <Testimony />
        <DownloadApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
