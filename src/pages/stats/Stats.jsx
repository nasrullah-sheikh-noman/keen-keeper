import { useContext } from "react";
import Chart from "../../components/stats/Chart";
import { UserContext } from "../../usercontext/Usercontext";
import Statsblank from "../../components/stats/Statsblank";

const Stats = () => {

  const { timelinevideocall, timelinetext, timelineaudiocall } =
      useContext(UserContext);

  return (
    <div>
      <div className="max-w-280 mx-auto my-8 py-6 px-12 md:px-12 lg:px-18 xl:px-0">
        <h2 className="text-4xl font-bold">Friendship Analytics</h2>
      </div>
      {
        timelinevideocall.length == 0 && timelineaudiocall.length == 0 && timelinetext.length == 0 ?
      
      <Statsblank/>
      :
      <Chart /> 
      }
    </div>
  );
};

export default Stats;
