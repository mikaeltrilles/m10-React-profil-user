import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from './Profil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//* Creer un composant React header, main et footer et les afficher sur la page
function App() {
  return (
    <>
      <Profil />
    </>
  );
}

export default App;