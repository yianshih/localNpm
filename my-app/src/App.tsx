import React from "react";
import { PullingInterval } from "./utils";

const myInterval = new PullingInterval({
  callback: () => console.log("running"),
  pauseMessage: "Paused",
  startMessage: "Started",
});

function App() {
  return (
    <div>
      <button onClick={() => myInterval.start()}>start</button>
      <button onClick={() => myInterval.pause()}>pause</button>
      <button
        onClick={() =>
          myInterval.updateCallback(() => {
            console.log("new running");
          })
        }
      >
        updateCallback
      </button>

      <div ref={myInterval.elementRef} />
    </div>
  );
}

export default App;
