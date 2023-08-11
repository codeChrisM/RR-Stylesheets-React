import React from "react";

const styles = {
  backgroundColor: "green",
};

function ComponentOne() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>ComponentOne</div>
      <div style={styles}>ComponentOne</div>
    </>

    // <div style="backgroundColor:red">ComponentOne</div>
  );
}

export default ComponentOne;
