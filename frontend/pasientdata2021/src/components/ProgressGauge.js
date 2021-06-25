import styled from 'styled-components'
import GaugeChart from 'react-gauge-chart'



const ProgressGauge = ({children}) => {
    return (
        <GaugeChart id="gauge-chart1"
            nrOfLevels={420}
            arcsLength={[0.2, 0.5, 0.3]}
            colors={['#EA4228', '#F5CD19', '#5BE12C',]}
            percent={0.37}
            arcPadding={0.02}
            style={{"width":"370px"}}
        />
    )

}

export default ProgressGauge;