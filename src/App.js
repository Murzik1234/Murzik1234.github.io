import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AWriter from "./pages/AWriter"
import Writers from "./pages/Writers";
import "./i18n";



function App() {
  return (
    <div className="App">
     <Header/>
     <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Writers" element={<Writers/>}/>
                    <Route exact path = '/writer/:id' element = {<AWriter />}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
