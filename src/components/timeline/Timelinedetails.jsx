import { useContext } from "react";
import { UserContext } from "../../usercontext/Usercontext";
import Contactdetails from "./Contactdetails";

const Timelinedetails = () => {
  const { timelinevideocall, timelinetext, timelineaudiocall } =
    useContext(UserContext);

    // const alltimelines = [
    //   ...timelinetext,
    //   ...timelineaudiocall,
    //   ...timelinevideocall,
    // ];

  return (
    <div className="max-w-260 mx-auto mt-5 px-6">
      <div className="flex justify-center ">
        <select
          defaultValue="Color scheme"
          className="select select-accent bg-cyan-50 text-lg font-medium"
        >
          <option disabled={true}>Filter timeline</option>
          <option>All text</option>
          <option>All audio call</option>
          <option>All video call</option>
        </select>
      </div>

      <div className=" border-gray-300 rounded-2xl p-3 my-8 bg-gray-50">
        {/* {
          timelinetext.map((textfriend, i) => <Contactdetails key={i} textfriend={textfriend}/> )
        } */}
        {/* {
          timelineaudiocall.map((audiofriend, i) => <Contactdetails key={i} audiofriend={audiofriend}/> )
        }
        {
          timelinevideocall.map((videofriend, i) => <Contactdetails key={i} videofriend={videofriend}/> )
        } */}

        {/* {
          alltimelines.map((item, i) => <Contactdetails key={i} item={item}/> )
        } */}
      </div>
    </div>
  );
};

export default Timelinedetails;
