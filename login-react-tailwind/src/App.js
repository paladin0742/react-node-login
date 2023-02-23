import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route>
            <Route path="/" element={<Login />} />
          </Route>
          <Route>
            <Route path="/home" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
