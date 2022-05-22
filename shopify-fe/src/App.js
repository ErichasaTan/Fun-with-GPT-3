import "./App.css";
import Main from "./pages/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="page_container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
