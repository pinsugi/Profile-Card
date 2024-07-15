import "./Profil.css";

function Profile_Card() {
  return (
    <>
      <div className=" card    flex flex-col    justify-around bg-slate-100  rounded-3xl   border-none pb-96 mt-20 ">
        <div className=" w-72 h-28 hover:shadow-2xl  py-11 pt-10 mt-0 flex zigzag-rectangle  items-center justify-center bg-pink-700   rounded-tl-3xl rounded-tr-full  rounded-bl-full  ">
          <div className="basis-1/4 ">
            {" "}
            <div className=" w-14 h-14 border-4 border-pink-300 bg-slate-400  rounded-full flex items-center   font-black   justify-center text-center text-3xl cursor-pointer hover:shadow-2xl  shadow-xl ">
              👤
            </div>
          </div>
        </div>

        <div className="basis-1/2  justify-center items-center ">
          <div className=" font-medium font-serif text-lg mt-5 justify-center items-center  mx-10 ">
            {" "}
            Johnny Rogers{" "}
          </div>
          <div className=" font-thin  text-sm text-center">@jonnyrogers</div>
          <div className=" mt-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="mx-auto"></div>
          </div>
          <div className="basis-1/2">
            <div></div>
            <div className="flex justify-between  my-28">
              <buttton className="btn pr-5   items-center justify-center ">
                {" "}
                Follow{" "}
              </buttton>
              <buttton className="btn ml-5 pr-2 text-center items-center justify-center">
                {" "}
                Message{" "}
              </buttton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile_Card;
