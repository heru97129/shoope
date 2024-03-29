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
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import postsReducer from './features/Users';
import Products from "./pages/product/articles/Products";
import Contact from "./pages/contact/Contact";
import { order } from "./features/Users";
import ShoopingCard from "./pages/shoppingCard/ShoopingCard";

const store = configureStore({
  reducer: {
    posts: postsReducer,
 
  },
 
});
console.log(store.getState())
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
      <Route path="contact"   element={<Contact />}/>
      <Route path="shopping"   element={<ShoopingCard/>}/>
      <Route path="login"   element={<Login />}/>

    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
