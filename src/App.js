import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Post1 from "./components/Body/Posts/Post1";
import Post3 from "./components/Body/Posts/Post3";
import Post4 from "./components/Body/Posts/Post4";
import Konec from "./components/Body/HZ/Konec";
import Footer from "./components/Footer/Footer";
import Seti from "./components/Body/HZ/Seti";
import Post2 from "./components/Body/Posts/Post2";
import Learn from "./components/Body/HZ/Learn";
import Search from "./components/Body/HZ/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Post1 />
      <Post2 />
      <Post3 />
      <Post4 />
      <Learn />
      <Konec />
      <Search />
      <Seti />
      <Footer />
    </div>
  );
}

export default App;
