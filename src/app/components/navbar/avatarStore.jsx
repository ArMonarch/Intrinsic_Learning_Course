import { create } from "zustand";

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
}));

export default useAvatar;
