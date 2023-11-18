
// import Message from "./Message"
// import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HealthCheck from './HealthCheck';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/health" element={<HealthCheck />} />
      </Route>
    </Router>
  );  // <div><Message /></div>
}

export default App;
