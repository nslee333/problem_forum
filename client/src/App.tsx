import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Login from "./components/Login";
import About from "./components/About";
import Post from "./components/Post";

function App() {
  return (
    <div className="min-h-[100vh] ">
      <Header />
        <Post />
        {/* <Login /> */}
        {/* <Feed /> */}
        {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
