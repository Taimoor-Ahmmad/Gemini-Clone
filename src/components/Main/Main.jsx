import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    resultData,
    input,
    setInput,
    loading,
  } = useContext(Context);

  useEffect(() => {
    console.log("resultData:", resultData);
    console.log("loading:", loading);
  }, [resultData, loading]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value); // Update the state with the new input
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default form submission behavior
      onSent(input); // Trigger the send function with the current input
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  setInput(
                    "Suggest beautiful places on earth to see on an upcoming road trip"
                  )
                }
              >
                <p>
                  Suggest beautiful places on earth to see on an upcoming road
                  trip
                </p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput("Briefly summarize the concept: Urban planning")
                }
              >
                <p>Briefly summarize the concept: Urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
              <div
                className="card"
                onClick={() =>
                  setInput("Improve the readability of the following code")
                }
              >
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>
            </div>
            <div className="search-box">
              <input
                onChange={handleInputChange} // Use the updated handler here
                onKeyPress={handleKeyPress} // Add key press listener
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <img
                  onClick={() => {
                    onSent(input); // Pass the current input to onSent
                  }}
                  src={assets.send_icon}
                  alt="Send Icon"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
