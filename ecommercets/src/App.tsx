import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Account } from "./pages/account/Account";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { RootBoundary } from "./error/root-boundary";

const App = () => {

  const isLoggIn = useSelector<RootState>((state) => state.auth.isLoggIn);
  const cartItems = useSelector<RootState>((state) => state.cart.itemList);
  console.log(cartItems);
  return (
    <>
      {isLoggIn ? (
        <div>not found</div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<RootBoundary />} />
            <Route path="/regsiter" element={<Regsiter />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          {!isLoggIn && <Login />}
          <Footer />
        </Router>
      )}
    </>
  );
};
export default App;
