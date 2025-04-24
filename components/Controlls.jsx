export default function Controls({ petState, setPetState, hunger, energy, feedPet, sleepPet }) {
    return (
      <div className="flex gap-2">
        <button onClick={() => setPetState('idle')} className="btn">Idle</button>
        <button onClick={() => setPetState('playing')} className="btn" disabled={hunger === 0 || energy === 0}>Play</button>
        <button onClick={sleepPet} className="btn" disabled={energy === 100}>Sleep</button>
        <button onClick={feedPet} className="btn" disabled={hunger === 100}>Feed</button>
      </div>
    );
  }
  