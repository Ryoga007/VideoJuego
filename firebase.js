// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoBJrU7Q6UzbfV7_2cEs7dU5-o3KAMU8g",
  authDomain: "fir-javascript-crud-fb64d.firebaseapp.com",
  projectId: "fir-javascript-crud-fb64d",
  storageBucket: "fir-javascript-crud-fb64d.appspot.com",
  messagingSenderId: "612351550364",
  appId: "1:612351550364:web:ea08d749f818c1dc56de59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => 
    addDoc( collection(db,'tasks'), {title, description})

export const getTasks = ()=> getDocs(collection(db,'tasks'))

export const onGetTasks = () => console.log('onGetTasks');

export {
    onSnapshot,
    collection,
    db
}