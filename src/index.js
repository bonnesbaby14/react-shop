import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Layout from "./containers/Layout";
import Login from "./containers/Login";

ReactDOM.render(<Layout>
    <Login/>

</Layout>, document.getElementById("root"));