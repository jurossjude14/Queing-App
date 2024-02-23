import { useState, useEffect, createContext } from 'react';
import ResultBox from './components/ResultBox';
import AdminForm from './components/AdminForm';
import AdminResultBox from './components/AdminResultBox';
// Firebase Connection
import './FirebaseCongfig.js'
import { getFirestore, getDocs, collection } from "firebase/firestore";
const db = getFirestore();

export const CueContext = createContext();

function App() {
  const [cuelist, setCuelist] = useState([]);

  const fetchPost = async () => {   
    await getDocs(collection(db, "cueListsDb"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), gid:doc.id }));
                setCuelist(newData);                
        })
  }  
  useEffect(() => {
    fetchPost();
  }, []); // Run only once (optional)

  return (
    <>
      <CueContext.Provider value={[cuelist, setCuelist]}>
        <ResultBox />
        <section className='admin-box'>
          <div className='container'>
            <div className='admin-interface box-container'>
              <AdminForm />
              <AdminResultBox />
            </div>
          </div>
        </section>
      </CueContext.Provider>
    </>
  );
}

export default App;
