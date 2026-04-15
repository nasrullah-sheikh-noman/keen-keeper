import { use, useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";
import { IoMdText } from "react-icons/io";
import { MdDeleteForever, MdOutlineNotificationsPaused } from "react-icons/md";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import { UserContext } from "../../usercontext/Usercontext";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const Frienddetails = () => {
  const { id } = useParams();

  const friends = use(friendsPromise);

  const expectedfriend = friends.find((friend) => friend.id == id);

  const { setTimelinevideocall, timelinevideocall } = useContext(UserContext);

  const handlesettimelinevideocall = (friend) => {
    console.log("friendexvideo", friend);

    const isExitFrind = timelinevideocall.find(
      (videocall) => videocall.id == friend.id,
    );

    if (isExitFrind) {
      toast.error("You already call this person", {
        position: "bottom-right",
      });
    } else {
      setTimelinevideocall([...timelinevideocall, friend]);
      toast.success("You join the video call.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="max-w-260 mx-auto border border-gray-300 shadow-cyan-400 shadow-lg pl-4 pb-4 pt-1.5 pr-1.5 my-8 rounded-2xl grid grid-cols-3 gap-2">
      <div className="col-span-1 grid grid-rows-3">
        <div className="border bg-gray-50 border-gray-300 my-4  px-6 py-8 flex flex-col items-center text-center space-y-3 rounded-2xl row-span-2">
          <img
            className="rounded-full mx-auto"
            src={expectedfriend.avatar}
            alt=""
          />
          <h2 className="text-2xl font-semibold">{expectedfriend.name}</h2>

          <h4 className="bg-red-400 rounded-full mx-auto px-3 py-1.5 font-semibold text-base w-fit">
            {expectedfriend.status}
          </h4>
          <h4 className="bg-cyan-400 rounded-full mx-auto px-3 py-1.5 font-semibold text-base w-fit">
            {expectedfriend.tag}
          </h4>
          <h4 className="text-gray-400 mx-auto px-3 py-1.5 font-semibold text-base w-fit">
            "{expectedfriend.note}"
          </h4>
          <h5>Preferred: {expectedfriend.preferredContact}</h5>
        </div>

        <div className="row-span-1 grid grid-rows-3 gap-3">
          <Link className="border rounded-2xl bg-gray-50 border-gray-300 flex items-center text-center justify-center text-lg font-medium gap-2">
            <span>
              <MdOutlineNotificationsPaused />
            </span>
            Snooze <span>{expectedfriend.actions.snooze}</span>
          </Link>

          <Link className="border rounded-2xl bg-gray-50 border-gray-300 flex items-center text-center justify-center text-lg font-medium gap-2">
            <span>
              <HiMiniArchiveBoxArrowDown />
            </span>
            <span>{expectedfriend.actions.archive ? "Archive" : ""}</span>
          </Link>

          <Link className="border rounded-2xl bg-gray-50 border-gray-300 flex items-center text-center justify-center text-lg font-medium gap-2">
            <span>
              <MdDeleteForever />
            </span>
            <span>{expectedfriend.actions.delete ? "Delete" : ""}</span>
          </Link>
        </div>
      </div>

      <div className="col-span-2  grid grid-rows-3 p-3 gap-3">
        <div className=" grid grid-cols-3 gap-4 text-center">
          <div className="border rounded-2xl bg-gray-50 border-gray-300 flex flex-col py-4 space-y-2 justify-center items-center text-center">
            <h1 className="text-3xl font-bold">
              {expectedfriend.stats.daysSinceContact}
            </h1>
            <h2 className="text-gray-500 text-lg">Days Since Contact</h2>
          </div>
          <div className="border rounded-2xl bg-gray-50 border-gray-300 flex flex-col py-4 space-y-2 justify-center items-center text-center">
            <h1 className="text-3xl font-bold">
              {expectedfriend.stats.goalDays}
            </h1>
            <h2 className="text-gray-500 text-lg">Goal (Days)</h2>
          </div>
          <div className="border rounded-2xl bg-gray-50 border-gray-300 flex flex-col py-4 space-y-2 justify-center items-center text-center">
            <h1 className="text-3xl font-bold">
              {expectedfriend.stats.nextDue}
            </h1>
            <h2 className="text-gray-500 text-lg">Next Due</h2>
          </div>
        </div>

        <div className="border bg-gray-50 border-gray-300 rounded-2xl p-3 grid grid-rows-1 ">
          <div className="flex flex-col items-center text-center justify-center row-span-1 gap-8 p-4">
            <div className="flex justify-between items-center text-center w-full">
              <h2 className="text-lg font-medium ">
                {expectedfriend.relationshipGoal.title}
              </h2>
              <Link className="btn btn-ghost border border-black">Edit</Link>
            </div>

            <h2 className="text-gray-500 flex text-center items-center justify-start w-full gap-2">
              Connect every
              <span className="text-xl font-bold text-black">
                {" "}
                {expectedfriend.relationshipGoal.description}
              </span>
            </h2>
          </div>
        </div>

        <div className="border bg-gray-50 border-gray-300 rounded-2xl p-4 grid grid-rows-1">
          <h2 className="text-lg font-medium">Quick Check-In</h2>
          <div className="grid grid-cols-3 gap-4">
            <Link className="flex border border-gray-300 p-4 bg-gray-100 rounded-2xl flex-col items-center py-6">
              <span>
                <FiPhoneCall />
              </span>
              {expectedfriend.quickActions.Call}
            </Link>

            <Link className="flex border border-gray-300 p-4 bg-gray-100 rounded-2xl flex-col items-center py-6">
              <IoMdText />
              {expectedfriend.quickActions.Text}
            </Link>

            <button
              onClick={() => {
                handlesettimelinevideocall(expectedfriend);
              }}
              className="flex border border-gray-300 p-4 bg-gray-100 rounded-2xl flex-col items-center py-6"
            >
              <span>
                <FaVideo />
              </span>
              {expectedfriend.quickActions.Video}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frienddetails;
