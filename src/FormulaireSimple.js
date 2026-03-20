import { useRef } from 'react';

function FormulaireSimple() {
  const prenomRef = useRef();
  const courrielRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const prenom = prenomRef.current.value;
    const courriel = courrielRef.current.value;
    alert(`Inscription confirmée pour ${prenom} (${courriel})`);
  };

  return (
    <form onSubmit={handleSubmit} style={{margin: '20px 0'}}>
      <input
        type="text"
        ref={prenomRef}
        placeholder="Prénom"
        style={{margin: '5px', padding: '8px'}}
      />
      <input
        type="email"
        ref={courrielRef}
        placeholder="Email"
        style={{margin: '5px', padding: '8px'}}
      />
      <button type="submit" style={{margin: '5px', padding: '8px'}}>
        Envoyer
      </button>
    </form>
  );
}

export default FormulaireSimple;