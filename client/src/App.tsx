import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-[100vh] ">
      <Header />
        <About />
      <Footer />
    </div>
  );
}

export default App;
