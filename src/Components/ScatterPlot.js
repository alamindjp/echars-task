import React from 'react';
import ReactECharts from 'echarts-for-react';

const ScatterPlot = ({datas}) => {
  let scatterdata =[]
  const ScatterDatas = () => {
    for (let i = 0; i < datas.length; i++) {
      let data = datas[i]
      scatterdata.push([data.Color_intensity, data.Hue])
    }
  }
  ScatterDatas(datas)
    const  options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: 'scatter',
            type: 'scatter',
            data: scatterdata,
          },
          {
            name: 'line',
            type: 'line',
            smooth: true,
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: 'circle',
            label: { show: true, fontSize: 16 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 }
          }
        ]
      };
    
      return <ReactECharts option={options} />;
};

export default ScatterPlot;