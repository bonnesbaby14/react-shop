import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css"
import Login from "../containers/Login";
import Layout from "../containers/Layout";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFoud from "../pages/NotFoud";

const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFoud />} />
                </Routes>
            </Layout>

        </BrowserRouter>

    )
}
export default App;