import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./components/Home";
import About from "./About";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/app" element={<App />}>
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
