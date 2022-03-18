import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa8zI-l9Lb3B2427ice039BtZMk7rY5bs",
  authDomain: "final-project-63e70.firebaseapp.com",
  projectId: "final-project-63e70",
  storageBucket: "final-project-63e70.appspot.com",
  messagingSenderId: "915524095871",
  appId: "1:915524095871:web:4cbe7e960f5d491d93d44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app