import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function ProfilUtilisateur() {
  const { utilisateur, setUtilisateur } = useContext(AuthContext);

  const handleDeconnexion = () => {
    setUtilisateur({ nom: '', estConnecte: false });
  };

  const handleConnexion = () => {
    setUtilisateur({ nom: 'farah', estConnecte: true });
  };

  return (
    <div style={{padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px'}}>
      {utilisateur.estConnecte ? (
        <>
          <p> Bonjour, <strong>{utilisateur.nom}</strong> !</p>
          <button
            onClick={handleDeconnexion}
            style={{padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px'}}
          >
            Se déconnecter
          </button>
        </>
      ) : (
        <>
          <p> Vous n'êtes pas connecté</p>
          <button
            onClick={handleConnexion}
            style={{padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px'}}
          >
            Se connecter
          </button>
        </>
      )}
    </div>
  );
}

export default ProfilUtilisateur;