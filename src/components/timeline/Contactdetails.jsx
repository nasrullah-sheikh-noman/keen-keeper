import { useContext } from "react";
import { UserContext } from "../../usercontext/Usercontext";

const Contactdetails = ({ item }) => {

  const { filter, setFilter } = useContext(UserContext);

  console.log("item", item, "filter", filter, "setFilter", setFilter);

  return (
    <div className="bg-gray-100">
      {item.type === "text" && (
        <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
          <div>
            <img src="/public/assets/text.png" alt="" />
          </div>
          <div>
            <h2 className="text-gray-500 text-medium">
              <span className="text-xl text-black font-semibold">Text </span>
              with {item.name}
            </h2>
            <h2>{new Date().toLocaleString()}</h2>
          </div>
        </div>
      )}

      {item.type === "audio" && (
        <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
          <div>
            <img src="/public/assets/call.png" alt="" />
          </div>
          <div>
            <h2 className="text-gray-500 text-medium">
              <span className="text-xl text-black font-semibold">Audio </span>
              with {item.name}
            </h2>
            <h2>{new Date().toLocaleString()}</h2>
          </div>
        </div>
      )}

      {item.type === "video" && (
        <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
          <div>
            <img src="/public/assets/video.png" alt="" />
          </div>
          <div>
            <h2 className="text-gray-500 text-medium">
              <span className="text-xl text-black font-semibold">Video </span>
              with {item.name}
            </h2>
            <h2>{new Date().toLocaleString()}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactdetails;
