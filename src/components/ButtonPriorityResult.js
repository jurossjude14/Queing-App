import { useContext } from "react"
import { CueContext } from "../App"
import {  doc,getFirestore,updateDoc } from 'firebase/firestore';
const db = getFirestore();


const ButtonPriorityResult = ({cueid,cuepriority,cuegid,searchDocument}) => {
    
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
      const updata = {...data, priority:!data.priority}
      await updateDocument(id, updata);
    };
    

    const priorityup = (id) => {
      
        setCuelist(cuelist.map((cue)=> cue.id === id? {...cue, priority:!cue.priority} : cue));
        handleSearch(cuegid);
    }
    
    return (
        <>
        <button className='admin-priority' onClick={()=>priorityup(cueid)}>☗ {`${cuepriority ? 'On Queue':'Up'}`}</button>
        </>
    )
}

export default ButtonPriorityResult
