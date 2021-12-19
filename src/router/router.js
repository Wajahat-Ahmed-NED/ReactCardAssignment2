import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import App from "../App";
import Cards from "../cards";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/card" element={<Cards />}/>
           <Route path="/" element={<App/>}/>
        </Routes>
      </div>
    </Router>
  );
}
