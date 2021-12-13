// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { firebaseConfig, projectId } from '../../api';
const firebaseApp = initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: projectId
});

const db = getFirestore();
export const App = () => {
    return <h1>ディスアプリ</h1>
};