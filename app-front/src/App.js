import PageA from "./app/pages/PageA";
import PageB from "./app/pages/PageB";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./app/pages/Header";
import Category from "./app/pages/Category";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/page" element={<PageB />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
