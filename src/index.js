import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog";
import OurStory from "./pages/ourstory/OurStory";
import Layout from "./components/layout/Layout";
import Account from "./pages/account/Account";
import postsReducer from './features/Users';
import Products from "./pages/product/articles/Products";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="OurStory" element={<OurStory />} />
      <Route path="account"   element={<Account />}/>
      <Route path="/product/:1"   element={<Products />}/>

    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
