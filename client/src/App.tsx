import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Body from "./components/Body";

function App() {
  return (
    <div className="min-h-[100vh] ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
