import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const [tes, setTes] = useState<string>("");
  useEffect(() => {
    fetch("/api/person")
      .then((res) => res.json())
      .then((data) => {
        setTes(data);
      });
  }, []);
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/tes">Hola</Link>
              {tes}
            </div>
          }
        />
        <Route path="/tes" element={<div>Holla tes</div>} />
      </Routes>
    </div>
  );
}

export default App;
