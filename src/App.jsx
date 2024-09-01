import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./Components/Main_Page/Main_Page"
import GoodsPage from "./Components/GoodsPage/goodspage.jsx"
import GoodPage from "./Components/GoodPage/goodpage.jsx"
import GoodByType from "./Components/GoodPageByType/goodpageByType.jsx"
import LoginPage from "./Components/Login/login.jsx"
import Cart from "./Components/CartPage/cart.jsx"
import { MyProvider } from "./Components/Login/CreateContext.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MyProvider>
            <LoginPage />
          </MyProvider>
        } />
        <Route path="/authorized" element={<MainPage />} />
        <Route path="/catalog" element={<GoodsPage />} />
        <Route path="/catalog/goodtypepage/:article" element={<GoodByType />} />
        <Route path="/catalog/goodtypepage/goodprebuypage/:article" element={<GoodPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
