import Profile_Card from "./components/Profile_Card";

function App() {
  return (
    <>
      <div className="p-4  max-w-none ma-auto bg-white justify-between  shadow-fuchsia-600  drop-shadow-md  hover:drop-shadow-lg  ring-offset-200 ring-0  flex  max-sm:p-2  items-center space-x-96 mt-top     rounded-none">
        <div className="text-xl  max-sm:text-lg  max-sm:flex hover:shadow-md cursor-pointer ring-green-900 font-medium text-black font-serif ">
          Profile{" "}
          <span className="  max-sm:text-lg max-sm:ml-0.5 text-pink-700 text font-semibold ">
            {" "}
            Card{" "}
          </span>
        </div>

        <div className=" m-3  max-sm:mr-32 max-sm:text-2xl   max-sm: text-black text-3xl shadow-fuchsia-600  hover:bg-purple-700  bg-gray-400 cursor-pointer  hover:drop-shadow-2xl  ">
          👩🏻‍💼
        </div>
      </div>

      <Profile_Card />
    </>
  );
}

export default App;
