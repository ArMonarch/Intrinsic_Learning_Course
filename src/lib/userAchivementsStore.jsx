import {create} from "zustand"

const userAchievements = create((set) => ({
    achievements:[],
    updateAchievement: (achievement) => set(() => ({achievements: achievement}))
}));

export default userAchievements;