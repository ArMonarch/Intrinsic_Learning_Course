'use client';
import useAvatar from "@/app/components/navbar/avatarStore";
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
  // Get Values for peeps from useAvatar  
  const accessory = useAvatar((state) => state.accessory);
  const body = useAvatar((state) => state.body);
  const face = useAvatar((state) => state.face);
  const hair = useAvatar((state) => state.hair);
  const facialHair = useAvatar((state) => state.facialHair);
  return (
    <div style={styles.showcaseWrapper}>
      <Peep
        style={styles.peepStyle}
        circleStyle={styles.circleStyle}
        accessory={accessory}
        body={body}
        face={face}
        hair={hair}
        facialHair={facialHair}
        strokeColor=""
        viewBox={{ x: "0", y: "0", width: "1050", height: "1200" }}
      ></Peep>
    </div>
  );
}
