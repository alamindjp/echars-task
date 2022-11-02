import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = ({datas}) => {

    let malicAcidAvarageData = []
    let alcohol = []
    const avarageNumber = (datas) => {
        let malicAcid1 = []
        let malicAcid2 = []
        let malicAcid3 = []

        for (let i = 0; i < datas.length; i++) {
            let data = datas[i]
            if (alcohol.includes(data.Alcohol) === false) {
                alcohol.push(data.Alcohol)
            }
            if (data.Alcohol === 1) {
                malicAcid1.push(data.Malic_Acid)
            }
            if (data.Alcohol === 2) {
                malicAcid2.push(data.Malic_Acid)
            }
            if (data.Alcohol === 3) {
                malicAcid3.push(data.Malic_Acid)
            }
        }
        const avarage = (data1, data2, data3) => {
            let malicAcidSum1 = 0;
            let malicAcidSum2 = 0;
            let malicAcidSum3 = 0;
            for (let i = 0; i < data1.length; i++) {
                let currentNum = data1[i]
                malicAcidSum1 += currentNum;
            }
            for (let i = 0; i < data2.length; i++) {
                let currentNum = data2[i]
                malicAcidSum2 += currentNum;
            }
            for (let i = 0; i < data3.length; i++) {
                let currentNum = data3[i]
                malicAcidSum3 += currentNum;
            }
            if (malicAcidSum1 === 0 || malicAcidSum2 === 0 || malicAcidSum3 === 0) {
                return
            }
            const malicAcidAvarag1 = malicAcidSum1 / data1.length
            const malicAcidAvarag2 = malicAcidSum2 / data1.length
            const malicAcidAvarag3 = malicAcidSum3 / data1.length
            malicAcidAvarageData.push(malicAcidAvarag1, malicAcidAvarag2, malicAcidAvarag3)
        }
        avarage(malicAcid1, malicAcid2, malicAcid3)
    }
    avarageNumber(datas)

    const options = {
        xAxis: {
            type: 'category',
            data: alcohol
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: malicAcidAvarageData,
                type: 'bar',
                barWidth: '60%'
            }
        ],
        tooltip: {
            trigger: 'axis'},
            axisPointer: {
                type: 'cross'
              }
    };

    return <ReactECharts option={options} />;
};

export default BarChart;