export default function Controls({ petState, setPetState, hunger, energy, feedPet, sleepPet }) {
    return (
      <div className="flex gap-2">
        <button onClick={() => {if(petState === "idle"){alert("I am !")}else{setPetState('idle')}} } className="btn">Sit</button>
        <button onClick={() => {if (hunger === 0 || energy === 0){
          alert("I am hungry")
        }else{setPetState('playing')}}} className="btn">Play</button>
        <button onClick={()=>{if (energy === 100){alert("no! i want to play")}else{sleepPet()}}} className="btn">Sleep</button>
        <button onClick={feedPet} className="btn" disabled={hunger === 100}>Feed</button>
      </div>
    );
  }
  