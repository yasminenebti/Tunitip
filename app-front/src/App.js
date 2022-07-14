import PageA from "./app/pages/PageA";
import PageB from "./app/pages/PageB";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./app/pages/Header";
import Category from "./app/pages/Category";
function App() {
  return (
    <Router>
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/page" element={<PageB />} />
      </Routes>
    </Router>
    // <Router>
    //   <Header />
    //   <Category />
    //   <Routes>
    //     <Route path="/" element={<PageA />} />
    //     <Route path="/search" element={<PageB />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
