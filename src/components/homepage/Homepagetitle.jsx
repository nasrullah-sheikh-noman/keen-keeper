
import { HiPlus } from "react-icons/hi";

const Homepagetitle = () => {
  return (
    <div className="container mx-auto text-center pt-6 px-8 m-8 space-y-3">
      <h3 className="text-4xl font-bold text-cyan-500">Friends to keep close in your life</h3>
      <h4 className="text-gray-400 text-sm">
        Your personal shelf of meaningful connections. Browse, tend, and nurture{" "}
        <br />
        the relationships that matter most.
      </h4>
      <button className="btn bg-[#47698F] text-white border-[#35567b] mt-5 hover:scale-105 transition duration-400">
        <span>
          <HiPlus />
        </span>
        Add a Friend
      </button>
    </div>
  );
};

export default Homepagetitle;
