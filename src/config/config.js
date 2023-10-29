import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAoFF39TW8quf05RZhlbb_RRofu_o7Mqio",
  authDomain: "rekap-history.firebaseapp.com",
  projectId: "rekap-history",
  storageBucket: "rekap-history.appspot.com",
  messagingSenderId: "583775838915",
  appId: "1:583775838915:web:2b355cd2889e7130eef876"
};

initializeApp(firebaseConfig);
const db = getFirestore()
export { db };