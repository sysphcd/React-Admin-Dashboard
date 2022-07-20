import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader, Header } from '../../components'

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Bar" title="Rio - Olympic Medal Count" />
      <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width:0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373F' : '#fff'}>
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel ]} />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} /> )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div> 
  )
}

export default Bar