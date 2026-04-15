

const Contactdetails = ({ textfriend, videofriend, audiofriend }) => {

  return (
    <div  className="bg-gray-100">

      <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
        <div>
          <img src="/public/assets/text.png" alt="" />
        </div>
        <div>
          <h2 className="text-gray-500 text-medium">
            <span className="text-xl text-black font-semibold">Text </span>with{" "}
            {textfriend.name}
          </h2>
          <h2>{new Date().toLocaleString()}</h2>
        </div>
      </div>

      <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
        <div>
          <img src="/public/assets/text.png" alt="" />
        </div>
        <div>
          <h2 className="text-gray-500 text-medium">
            <span className="text-xl text-black font-semibold">Audio </span>with{" "}
            {audiofriend.name}
          </h2>
          <h2>{new Date().toLocaleString()}</h2>
        </div>
      </div>

      <div className="flex gap-4  items-center border border-gray-300 px-5 py-3 rounded-2xl my-6">
        <div>
          <img src="/public/assets/text.png" alt="" />
        </div>
        <div>
          <h2 className="text-gray-500 text-medium">
            <span className="text-xl text-black font-semibold">Video </span>with{" "}
            {videofriend.name}
          </h2>
          <h2>{new Date().toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Contactdetails;
