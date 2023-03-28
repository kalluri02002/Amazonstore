
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './pages/cart';
import { Products } from './pages/products';
import { Route ,Routes} from "react-router"


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      {/* creating router */}
      
      <Routes>
        <Route index path="/" element={<Products/>} />
        <Route  path="/cart" element={<Cart/>} />
      </Routes>
      
    </div>

  );
}

export default App;
