import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';
import './components/Header.css';
import './components/Contact.css';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header title="Call a Friend" subtitle="your friendly contact app"/>
      {contacts.map((kontak) => {
        return <Contact key={kontak.name} kontak={kontak} />
      })}
    </div>
  );
}

export default App;
