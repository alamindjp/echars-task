import React, { useEffect, useState } from 'react';
import BarChart from './Components/BarChart';
import ScatterPlot from './Components/ScatterPlot';
import './App.css';

const App = () => {
  const [datas, setDatas] = useState([]);
  // console.log(datas)

  const url = "Wine-Data.json"
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setDatas(data))
  }, []);
  return (
    <div className="App">
      <div className='chart-container'>
        <h2 className='bar-heading'>Scatter Plot</h2>
        <ScatterPlot datas={datas} />
      </div>
      <div className='chart-container'>
        <h2 className='bar-heading'>Bar Chart</h2>
        <BarChart datas={datas} />
      </div>
    </div>
  );
};

export default App;