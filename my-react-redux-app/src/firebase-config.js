import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfQVMCxF_ncjs5wfnZRVbZUFouIbEVPrM",
  authDomain: "fir-test-a3490.firebaseapp.com",
  projectId: "fir-test-a3490",
  storageBucket: "fir-test-a3490.appspot.com",
  messagingSenderId: "915772816446",
  appId: "1:915772816446:web:37dd2f2333f87abcae256f",
  measurementId: "G-MMYK5D1GS8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
