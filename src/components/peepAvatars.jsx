import React from "react";
import ReactDOM from "react-dom";
import Peep from "react-peeps";

const styles = {
  peepStyle: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignSelf: "center",
  },
  circleStyle: {
    backgroundColor: "#F3D34A",
    width: 270,
    height: 270,
    alignSelf: "center",
    borderRadius: 135,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "grey",
    borderStyle: "solid",
  },
  showcaseWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "-webkit-fill-available",
  },
};

export function PeepAvatar() {
  return (
    <div style={styles.showcaseWrapper}>
      <Peep
        style={styles.peepStyle}
        circleStyle={styles.circleStyle}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor=""
        viewBox={{ x: "0", y: "0", width: "1050", height: "1200" }}
      ></Peep>
    </div>
  );
}
