// App.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Calculator from "./pages/Calculator/Calculator";


export default function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
