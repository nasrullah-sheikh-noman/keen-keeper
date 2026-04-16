import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { UserContext } from "../../usercontext/Usercontext";
import { useContext } from "react";

const Chart = () => {

  const { timelinevideocall, timelinetext, timelineaudiocall } =
        useContext(UserContext);

  const data = [
    { name: "Text", value: timelinetext.length, fill: "red" },
    { name: "Audio call", value: timelineaudiocall.length, fill: "green" },
    { name: "Video call", value: timelinevideocall.length, fill: "blue" },
  ];

  return (
    <div className="m-4">
      <div className="max-w-250 mx-auto p-3 sm:p-6 md:p-8 lg:p-11 border border-gray-300 rounded-2xl bg-gray-50 ">
        <h2 className="text-gray-500 text-xl">By Interaction Type</h2>
        <div className=" flex justify-center items-center my-11">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
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
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Chart;
