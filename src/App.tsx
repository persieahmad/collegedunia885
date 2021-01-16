import React from "react";
import { colleges } from "./colleges.json";
import photo from "./college.jpg";
import StarRatings from "react-star-ratings";

function App() {
  const isMobile: boolean = window.innerWidth <= 500;
  const all = [colleges[0], colleges[1]];

  return (
    <div>
      <p
        style={{
          marginLeft: isMobile ? 12 : 60,
          fontSize: isMobile ? 16 : 30,
          fontFamily: "bold",
        }}
      >
        Colleges in North India
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {all.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                margin: 10,
              }}
            >
              <img
                alt={data.college_name}
                src={photo}
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "auto",
                  filter: "brightness(30%)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p style={{ fontSize: "1.2vw" }}>{data.college_name}</p>
                <div
                  style={{
                    marginLeft: isMobile ? 4 : 10,
                    marginTop: isMobile ? -9 : 18,
                  }}
                >
                  <StarRatings
                    rating={data.rating}
                    starRatedColor="black"
                    numberOfStars={5}
                    name="rating"
                    starDimension={isMobile ? "4" : "12"}
                    starSpacing={"1"}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: isMobile ? 36 : 255,
                    marginTop: isMobile ? -6 : 6,
                  }}
                >
                  <p style={{ fontSize: isMobile ? 8 : 14 }}>
                    <s>₹{data.original_fees}</s>
                  </p>
                  <div>
                    <p
                      style={{
                        color: "#ffffff",
                        fontSize: isMobile ? 8 : 14,
                        fontFamily: "Raleway,Helvetica",
                        backgroundColor: "#E80707",
                        marginLeft: isMobile ? 4 : 6,
                        marginTop: isMobile ? 10 : 16,
                      }}
                    >
                      -{data.discount}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
