import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from "./Components/Main_Page/Main_Page"
import GoodsPage from "./Components/GoodsPage/goodspage.jsx"
import GoodPage from "./Components/GoodPage/goodpage.jsx"
import LoginPage from "./Components/Login/login.jsx"
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
        <Route path="/catalog/goodpage" element={<GoodPage />} />
      </Routes>
    </Router>
  )
}

export default App
