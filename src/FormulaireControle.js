import { useState } from 'react';

function FormulaireControle() {
  const [prenom, setPrenom] = useState('');
  const [courriel, setCourriel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}, votre email est : ${courriel}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{margin: '20px 0'}}>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        placeholder="Votre prénom"
        style={{margin: '5px', padding: '8px'}}
      />
      <input
        type="email"
        value={courriel}
        onChange={(e) => setCourriel(e.target.value)}
        placeholder="Votre email"
        style={{margin: '5px', padding: '8px'}}
      />
      <button type="submit" style={{margin: '5px', padding: '8px'}}>
        Valider
      </button>
    </form>
  );
}

export default FormulaireControle;