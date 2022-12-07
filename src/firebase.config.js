import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB6B2q0MNUvHazXfZoq-0xr5SvhVi_YP_Y",
  authDomain: "foodfast-38655.firebaseapp.com",
  databaseURL: "https://foodfast-38655-default-rtdb.firebaseio.com",
  projectId: "foodfast-38655",
  storageBucket: "foodfast-38655.appspot.com",
  messagingSenderId: "991061919171",
  appId: "1:991061919171:web:3be0e2b6bf3de0865a6976"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

