import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Form1 from "./Form/Form1"
import Form2 from "./Form/Form2";
import Form3 from "./Form/Form3";
import Soal from "./FormSoal/Soal";
import Soal2 from "./FormSoal2/Soal2";
import Soal3 from "./FormSoal3/Soal3";
import Side from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import BiodataKeluarga from "./BiodataKeluarga/BiodataKeluarga"
import DataIndividu from "./Form/FormDataIndividu"
import DetailDataIndividu from "./Detail_Data_Individu/detail_data"
import LastPage from "./LastPage/LastPage";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/form1" component={Form1} />
      <Route path="/form2" component={Form2} />
      <Route path="/form3" component={Form3} />
      <Route path="/table" component={Table} />
      <Route path="/soal" component={Soal} />
      <Route path="/soal2" component={Soal2} />
      <Route path="/soal3" component={Soal3} />
      <Route path="/selesai" component={LastPage} />
      <Route path="/sidebar" component={Side} />
      <Route name="detaildata" path="/detaildata/:value" component={DetailDataIndividu} />
      <Route name="biodata" path="/biodatakeluarga/:value" component={BiodataKeluarga} />
      <Route name="dataindividu" path="/dataindividu/:addvalue" component={DataIndividu} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
