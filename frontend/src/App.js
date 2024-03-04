import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
      <BrowserRouter>
          <div className="layout">
              <NavBar/>
              <main>
                  <AppRouter/>
              </main>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
