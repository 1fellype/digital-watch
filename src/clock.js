import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Atualizar a cada segundo

    return () => clearInterval(interval); // Limpar o intervalo ao desmontar
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return (
    <div className="Clock">
      <span>{formattedHours}</span>
      <span>:</span>
      <span>{formattedMinutes}</span>
      <span>:</span>
      <span>{formattedSeconds}</span>
    </div>
  );
};

export default Clock;