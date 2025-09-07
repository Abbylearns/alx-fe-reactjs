import React from "react";

export default function UserProfile(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", borderRadius: "8px", backgroundColor: "#fff" }}>
      <h2 style={{ color: "blue", fontSize: "20px", margin: "0 0 8px 0" }}>{props.name}</h2>
      <p style={{ margin: "4px 0" }}>Age: <span style={{ fontWeight: "700" }}>{props.age}</span></p>
      <p style={{ fontStyle: "italic", margin: "4px 0" }}>Bio: {props.bio}</p>
    </div>
  );
}
