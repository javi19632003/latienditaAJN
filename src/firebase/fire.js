
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, where, query, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0WZn9T7p_6UK-bHnY68Ejmg50LOUnVPw",
  authDomain: "entregacodehouselatiendita.firebaseapp.com",
  projectId: "entregacodehouselatiendita",
  storageBucket: "entregacodehouselatiendita.appspot.com",
  messagingSenderId: "889388178531",
  appId: "1:889388178531:web:462d97b49c6f8fc5ba6c56"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();


export const todos = ()  => {
  const todos = getDocs(collection(db, "productos"));
  return todos
};

export const produxcate = (cate)  => {
  const q0 = collection(db, "productos");
  const q1 = query(q0, where('cate', '==', cate) ); 
  const q2 = getDocs(q1);
  return q2
};

export const unProducto = (id) => {
  const uno0 = doc(db, 'productos', id);
  const uno1 = getDoc(uno0);
  return uno1
}

export const tomoId = (dataBase) => {

  const nuevoId = doc(collection(db, dataBase));
  return nuevoId.id
}

export const guardoOrden = async (dataBase, data) => {

  const retorno = await addDoc(collection(db, dataBase), data)
  return  retorno.id  
 }
