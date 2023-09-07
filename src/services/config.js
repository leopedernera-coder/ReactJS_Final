import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtD4hv60EwYvnDRHDq_NK2q21w4tuqT7U",
  authDomain: "basereact2023.firebaseapp.com",
  projectId: "basereact2023",
  storageBucket: "basereact2023.appspot.com",
  messagingSenderId: "670895432519",
  appId: "1:670895432519:web:37ecd0ea074eed847ba262"
};

const app = initializeApp(firebaseConfig);
export const base = getFirestore(app);