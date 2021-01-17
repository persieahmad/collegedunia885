import React from "react";
import photo from "./college.jpg";
import StarRatings from "react-star-ratings";

export default function Card({ data }: any) {
  const isMobile: boolean = window.innerWidth <= 500;

  return (
    <div>
      <div
        style={{
          margin: 10,
        }}
      >
        {data.promoted && (
          <div
            style={{
              position: "relative",
              top: isMobile ? 34 : 100,
              left: isMobile ? 154 : 564,
              zIndex: 1,
            }}
          >
            <p
              style={{
                backgroundColor: "#00b0dc",
                width: isMobile ? 20 : 76,
                paddingLeft: isMobile ? 7 : 30,
                paddingRight: isMobile ? 7 : 30,
                paddingBottom: isMobile ? 3 : 6,
                paddingTop: isMobile ? 3 : 6,
                color: "white",
                fontSize: isMobile ? 4 : 16,
              }}
            >
              PROMOTED
            </p>
          </div>
        )}
        <div
          style={{
            position: "relative",
            top: isMobile ? 36 : 96,
            left: isMobile ? 156 : 612,
            zIndex: 1,
            backgroundColor: "#ffae00",
            width: isMobile ? 24 : 70,
            textAlign: "center",
            color: "white",
            fontSize: isMobile ? 4 : 12,
            paddingLeft: isMobile ? 1 : 1,
            paddingRight: isMobile ? 1 : 1,
            paddingBottom: isMobile ? 1 : 1,
            paddingTop: isMobile ? 1 : 1,
            borderRadius: 4,
          }}
        >
          <p>
            <b>{data.rating} / 5</b>
          </p>
          <p>
            <b>{data.rating_remarks}</b>
          </p>
        </div>
        <img
          alt={data.college_name}
          src={photo}
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            filter: "brightness(30%)",
            borderRadius: 3,
          }}
        />
        <div
          style={{
            position: "relative",
            top: isMobile ? -20 : -54,
            left: isMobile ? 2 : 4,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {data.tags.map((x: any, index: any) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "whitesmoke",
                    marginLeft: isMobile ? 2 : 10,
                    paddingLeft: isMobile ? 2 : 10,
                    paddingRight: isMobile ? 2 : 10,
                    borderRadius: 20,
                    fontSize: isMobile ? 4 : 12,
                  }}
                >
                  <p>{x}</p>
                </div>
              );
            })}
            <p
              style={{
                fontSize: isMobile ? 4 : 12,
                color: "white",
                marginLeft: isMobile ? 50 : 266,
              }}
            >
              #{data.ranking}
            </p>
          </div>
        </div>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: isMobile ? -12 : -26,
          }}
        >
          <p style={{ fontSize: "1vw" }}>{data.nearest_place[0]} | </p>
          <p style={{ color: "gray", fontSize: "1vw" }}>
            {data.nearest_place[1]}
          </p>
          <p
            style={{
              fontSize: isMobile ? 10 : 30,
              color: "#E80707",
              marginLeft: isMobile ? 38 : 174,
              marginTop: isMobile ? 4 : 6,
            }}
          >
            <b>₹{data.discounted_fees}</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: isMobile ? -16 : -44,
          }}
        >
          <p style={{ color: "#00bc87", fontSize: isMobile ? 4 : 14 }}>
            <b>93% Match: </b>
          </p>
          <p style={{ fontSize: isMobile ? 4 : 14 }}>
            {data.famous_nearest_places}
          </p>
          <p
            style={{
              color: "gray",
              fontSize: isMobile ? 4 : 12,
              marginLeft: isMobile ? 32 : 182,
            }}
          >
            {data.fees_cycle}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: isMobile ? -1 : -6,
          }}
        >
          <div
            style={{
              backgroundColor: "#00b0dc",
              paddingLeft: 4,
              paddingRight: 14,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <p style={{ fontSize: isMobile ? 4 : 14 }}>{data.offertext}</p>
          </div>
          <p
            style={{
              color: "#00bc87",
              fontSize: isMobile ? 4 : 16,
              marginLeft: isMobile ? 20 : 134,
            }}
          >
            <b>
              {data.amenties[0]} • {data.amenties[1]}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
