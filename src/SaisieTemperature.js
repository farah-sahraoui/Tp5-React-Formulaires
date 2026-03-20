function SaisieTemperature({ valeur, onValeurChange }) {
  return (
    <input
      type="number"
      value={valeur}
      onChange={(e) => onValeurChange(e.target.value)}
      placeholder="Température en °C"
      style={{margin: '5px', padding: '8px'}}
    />
  );
}

export default SaisieTemperature;