import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="min-h-[100vh] ">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
