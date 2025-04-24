import { useState, useEffect } from 'react';
import Pet from '../components/Pet.jsx';
import StatsBar from '../components/statsBar.jsx';
import Controls from '../components/Controlls.jsx';

export default function PetApp() {
  const [petState, setPetState] = useState('idle');
  const [hunger, setHunger] = useState(100);
  const [energy, setEnergy] = useState(100);

  useEffect(() => {
    const hungerInterval = setInterval(() => {
      setHunger(h => Math.max(h - 1, 0));
      if (hunger <= 50 ) {
        try {
          alert('Your pet is getting hungry!');
        }
        catch (error) {
          console.error('Error showing alert:', error);
        }
      }
    }, 1000);
    return () => clearInterval(hungerInterval);
  }, []);

  useEffect(() => {
    if (petState === 'playing') {
      const energyInterval = setInterval(() => {
        setEnergy(e => Math.max(e - 2, 0));
      }, 1000);
      return () => clearInterval(energyInterval);
    }
  }, [petState]);

  useEffect(() => {
    if (energy === 0 && petState !== 'sleeping') {
      setPetState('sleeping');
      sleepPet();

    }
  }, [energy]);

  const feedPet = () => hunger < 100 && setHunger(100);

  const sleepPet = () => {
    if (petState !== 'sleeping') {
      setPetState('sleeping');
      const recharge = setInterval(() => {
        setEnergy(e => {
          if (e >= 100) {
            clearInterval(recharge);
            setPetState('idle');
            return 100;
          }
          return e + 5;
        });
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen gap-6 bg-amber-50">
      <Pet petState={petState} />
      <StatsBar hunger={hunger} energy={energy} />
      <Controls
        petState={petState}
        setPetState={setPetState}
        hunger={hunger}
        energy={energy}
        feedPet={feedPet}
        sleepPet={sleepPet}
      />
    </div>
  );
}
