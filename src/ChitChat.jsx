import "./Chitchat.css";

function ChitChat() {
  return (
    <div>
      <div className="chat-notification  mt-40  rounded-2xl ">
        <div className="chat-notification-content">
          <h4 className="chat-notification-title ">ChitChat</h4>
          <p className="chat-notification-message drop-shadow-lg ">
            {" "}
            You have a new message! 💬.
          </p>
          {/* <button className="bg-yellow-600 dark:md:hover:bg-yellow-500 rounded-full py-1 px-3 hover:text-white  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Save changes
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ChitChat;
