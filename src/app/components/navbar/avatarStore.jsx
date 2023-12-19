import { create } from "zustand";
import React from "react";
import { UserAuth } from "@/app/context/AuthContext";



// async function getAvatar(){
//   const {user} = UserAuth();
//   const res =  await fetch(`http://localhost:8081/users/getAvatar/?uid=${encodeURIComponent(user.uid)}`)
//   const resjson = await res.json();
//   const data = resjson.data()
//   return data
// }



const useAvatar = create((set) => ({
  accessory: "None",
  body: "Shirt",
  face: "Smile",
  hair: "Bald",
  facialHair: "None",

  
  

  updateAccessory: (accessory) => set(() => ({ accessory: accessory })),
  updateBody: (body) => set(() => ({ body: body })),
  updateFace: (face) => set(() => ({ face: face })),
  updateHair: (hair) => set(() => ({ hair: hair })),
  updatefacialHair: (fHair) => set(() => ({ facialHair: fHair })),
})


);

export default useAvatar;
