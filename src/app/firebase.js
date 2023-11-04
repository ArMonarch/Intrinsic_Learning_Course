// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL8HD8YLuHfGFzbft8t3nyiewTWSqgepg",
  authDomain: "intrinsic-95e3a.firebaseapp.com",
  projectId: "intrinsic-95e3a",
  storageBucket: "intrinsic-95e3a.appspot.com",
  messagingSenderId: "870708006138",
  appId: "1:870708006138:web:c66a7335c3c756ceb70d43",
  measurementId: "G-LK70JHVMXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);