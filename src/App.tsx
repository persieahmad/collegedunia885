import React from "react";
import Card from "./Card";
import { colleges } from "./colleges.json";

function App() {
  const isMobile: boolean = window.innerWidth <= 500;

  return (
    <div>
      <p
        style={{
          marginLeft: isMobile ? 12 : 60,
          fontSize: isMobile ? 16 : 30,
          fontFamily: "bold",
          marginBottom: isMobile ? -20 : -100,
        }}
      >
        Colleges in North India
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "centre",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginLeft: isMobile ? 0 : 76,
        }}
      >
        {colleges.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                width: isMobile ? "50%" : "",
              }}
            >
              <Card {...{ data }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
