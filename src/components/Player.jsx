import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // console.log({ playerName });

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onChange={() => console.log({ value: playerName.current })}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
