import { useContext, useState } from "react";
import { UserContext } from "../../usercontext/Usercontext";
import Contactdetails from "./Contactdetails";
import Timelineblank from "./Timelineblank";

const Timelinedetails = () => {
  const { timelinevideocall, timelinetext, timelineaudiocall } =
    useContext(UserContext);

  const alltimelines = [
    ...timelinetext.map((item) => ({ ...item, type: "text" })),
    ...timelineaudiocall.map((item) => ({ ...item, type: "audio" })),
    ...timelinevideocall.map((item) => ({ ...item, type: "video" })),
  ];

  const sortedtimelines = alltimelines.sort(
    (a, b) => new Date(a.stats.nextDue) - new Date(b.stats.nextDue),
  );

const [filter, setFilter] = useState("");
 

  return (
    <div className="max-w-260 mx-auto mt-5 px-1 sm:px-2 md:px-4 lg:px-6">
      <div className="flex justify-center ">
        <select
          defaultValue={filter}
          onClick={(e) => setFilter(e.target.value)}
          className={`select select-accent bg-cyan-50 ${filter == 0 ? "text-gray-400" : "text-black"} text-lg font-medium`}
        >
          <option value=""  disabled >Filter timeline</option>
          <option value="text" >All text</option>
          <option value="audio" >All audio call</option>
          <option value="video" >All video call</option>
        </select>
      </div>

      {
        sortedtimelines.length != 0 &&
          <div className="border border-gray-300 rounded-2xl p-6 my-8 bg-gray-50">
          {sortedtimelines.map((item, i) => (
            <Contactdetails key={i} item={item} />
          ))}
        </div>
      }


      {
        sortedtimelines.length == 0 && 
        <Timelineblank/>
      }

    </div>
  );
};

export default Timelinedetails;
