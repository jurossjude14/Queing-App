import { useContext } from "react";
import { CueContext } from "../App";
import {  doc,getFirestore,updateDoc } from 'firebase/firestore';
const db = getFirestore();


const ButtonServingResult = ({cueid, cueserving, cuegid, searchDocument}) => {
    const [cuelist,setCuelist] = useContext(CueContext);  

    const updateDocument = async (id, updatedData) => {
        try {
          const docRef = doc(db, 'cueListsDb', id);
          await updateDoc(docRef, updatedData);
          console.log('Document successfully updated');
        } catch (error) {
          console.error('Error updating document:', error);
        }
      };
  
      const handleSearch = async (id) => {
        const data = await searchDocument(id);
        const updata = {...data, serving:!data.serving}
        await updateDocument(id, updata);
      };
      
    const servingup = (id) => {
        setCuelist(cuelist.map((cue)=> cue.id === id? {...cue, serving:!cue.serving } : cue));
        handleSearch(cuegid);
      }
    
    return (
        <>
        <button className='admin-serve'onClick={()=>servingup(cueid)}>✔ {`${cueserving? 'Serving':''}`}</button>
        </>
    )
}

export default ButtonServingResult
