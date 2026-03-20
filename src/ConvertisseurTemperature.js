import { useState } from 'react';
import SaisieTemperature from './SaisieTemperature';

function ConvertisseurTemperature() {
  const [celsius, setCelsius] = useState('');

  const convertirEnFahrenheit = (tempCelsius) => {
    if (tempCelsius === '') return '';
    return (parseFloat(tempCelsius) * 9/5 + 32).toFixed(1);
  };

  return (
    <div style={{margin: '20px 0'}}>
      <SaisieTemperature
        valeur={celsius}
        onValeurChange={setCelsius}
      />
      {celsius ? (
        <p style={{margin: '10px 0'}}>
          {celsius}°C équivaut à {convertirEnFahrenheit(celsius)}°F
        </p>
      ) : (
        <p style={{color: '#666'}}>Entrez une température pour voir la conversion</p>
      )}
    </div>
  );
}

export default ConvertisseurTemperature;