import React from 'react';
import './App.css'; // Bu satır, uygulamanızın CSS dosyasını içe aktarıyor
import About from './components/about'; // about bileşenini içe aktarıyor
import Contact from './components/contact'; // contact bileşenini içe aktarıyor
import Footer from './components/footer'; // footer bileşenini içe aktarıyor
import Header from './components/header'; // header bileşenini içe aktarıyor
import Projects from './components/projects'; // projects bileşenini içe aktarıyor

function App() {
  return (
    <div className="App">
      <Header /> {/* Header bileşenini kullanıyoruz */}
      {/* Diğer bileşenleri burada kullanabilirsiniz */}
    </div>
  );
}

export default App;
