import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {customStore} from '../Redux/customStore'
import { Provider } from 'react-redux'
// import Home from "./Home";
import { Outlet } from "react-router";
function App() {
  return (
    <>
    <Provider store={customStore}>
        <Header/>
        <Outlet />
        <Footer/>
    </Provider>
    </>
  );
}

export default App;
