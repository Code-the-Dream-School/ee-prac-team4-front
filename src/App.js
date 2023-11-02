import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import LandingPage from "./components/LandingPage";
import Dashaboard from "./pages/dashboard/Dashboard";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      {/*<h1>{message}</h1>*/}
      <LandingPage />
      <Dashaboard />
    </>
  );
}

export default App;
