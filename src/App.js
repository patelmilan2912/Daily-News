import './App.css';
import Navbar from './component/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';

const App = () => {
  const [progress, setProgress] = useState(0);  
  const pageSize = 15;
  const apiKey = "79a0e5e62bf44824a9095dd1e7d0babc";
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="ca" category="general" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="ca" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="ca" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="ca" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="ca" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="ca" category="technology" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="ca" category="business" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;