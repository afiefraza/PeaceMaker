import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Pages/header/Header";
import CancellerResult from "./components/Pages/cancellerresult/CancellerResult";
import Error404 from "./components/Pages/404error/Error404";
import Aboutus from "./components/Pages/aboutus/Aboutus";
import Signup from "./components/Pages/signup/Signup";
import Contact from "./components/Pages/contact/Contact";
import Creactaccount from "./components/Pages/createaccount/Createaccount";
import Accountsetting from "./components/Pages/accountsetting/AccountSetting";
import Cancellor from "./components/Pages/cancelller/Cancellor";
import Classifier from "./components/Pages/classifier/Classifier";
import Suggestions from "./components/Pages/suggestions/Suggestions";
import Homepage from "./components/Pages/homepage/Homepage";
import Main from "./components/Pages/mainscreen/Main";
import Classifierresult from "./components/Pages/classifierresult/Classifierresult";
import History from "./components/Pages/history/History.jsx";
import Startup from "./components/Pages/entrancepage/Startup";
import RecordButton from "./components/Pages/fileupload/Upload";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/cancellor" element={<Cancellor />} />
            <Route path="/classifier" element={<Classifier />} />
            <Route path="/classifier-result" element={<Classifierresult />} />
            <Route path="/Account" element={<Accountsetting />} />
            <Route path="/history" element={<History />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/login" element={<Signup />} />
            <Route path="/signup" element={<Creactaccount />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
