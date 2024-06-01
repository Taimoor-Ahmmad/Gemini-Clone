import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context.jsx";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const toggle = () => {
    setExtended((prev) => !prev);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={toggle} className="menu" src={assets.menu_icon} />
        <div
          onClick={() => {
            newChat();
          }}
          className="new-chat"
        >
          <img src={assets.plus_icon} />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img src={assets.message_icon} />
                  <p>{item.slice(0, 15)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom recent-entry">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p> Help </p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p> Activity </p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p> Settings </p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
