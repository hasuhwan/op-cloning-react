import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TopNav from "./components/topNav";
import { Rank } from "./pages/rank";
import { RankTier } from "./pages/rankTier";
function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className="bg-bgColor w-full h-screen flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboards" element={<Rank />}>
            <Route path="tier" element={<RankTier />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
