import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './routes/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
