import { useState } from 'react';
import { AuthContext } from './AuthContext';
import FormulaireControle from './FormulaireControle';
import FormulaireSimple from './FormulaireSimple';
import ConvertisseurTemperature from './ConvertisseurTemperature';
import ProfilUtilisateur from './ProfilUtilisateur';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'hassna',
    estConnecte: true
  });

  return (
    <AuthContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div style={{padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{color: '#333'}}>TP React - Formulaires et Contextes</h1>

        <div style={{border: '1px solid #ccc', padding: '15px', margin: '20px 0', borderRadius: '5px'}}>
          <h2> Formulaire contrôlé</h2>
          <FormulaireControle />
        </div>

        <div style={{border: '1px solid #ccc', padding: '15px', margin: '20px 0', borderRadius: '5px'}}>
          <h2> Formulaire non-contrôlé</h2>
          <FormulaireSimple />
        </div>

        <div style={{border: '1px solid #ccc', padding: '15px', margin: '20px 0', borderRadius: '5px'}}>
          <h2> Convertisseur de température</h2>
          <ConvertisseurTemperature />
        </div>

        <div style={{border: '1px solid #ccc', padding: '15px', margin: '20px 0', borderRadius: '5px'}}>
          <h2> Profil utilisateur (contexte)</h2>
          <ProfilUtilisateur />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;