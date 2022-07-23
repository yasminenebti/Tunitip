import PageA from "./app/pages/PageA";
import Search from "./app/pages/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./app/pages/Header";
import Category from "./app/pages/Category";
import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import setAuthToken from "./app/utils/setAuthToken";
import { load } from "./app/actions/auth.actions";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(load());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
