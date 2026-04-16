
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Chart = () => {

  const data = [
  { name: 'Text', value: 400 , fill: "red"},
  { name: 'Audio call', value: 300 , fill: "green"},
  { name: 'Video call', value: 300 , fill: "blue"},
];


  return (
    <div className='container mx-auto flex justify-center items-center'>
   <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
    </div>
  );
};

export default Chart;