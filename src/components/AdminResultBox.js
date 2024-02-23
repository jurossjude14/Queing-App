import ButtonDeleteResult from "./ButtonDeleteResult.js";
import ButtonPriorityResult from "./ButtonPriorityResult.js";
import ButtonServingResult from "./ButtonServingResult.js";
import ButtonAnnounceResult from "./ButtonAnnounceResult.js";
import { useContext } from "react";
import { CueContext } from "../App.js"
import {  doc,getFirestore, getDoc } from 'firebase/firestore';
const db = getFirestore();



const AdminResultBox = ({title}) => { 
const [cuelist] = useContext(CueContext);

const searchDocument = async (id) => {
    try {
      const docRef = doc(db, 'cueListsDb', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data(); // Return document data if found
      } else {
        console.log('No document found with ID:', id);
        return null; // Handle case where document doesn't exist
      }
    } catch (error) {
      console.error('Error searching document:', error);
      return null; // Handle errors gracefully
    }
  }


 return (
    <aside className='form-admin-result'>
    <h3 className='admin-result-head'>{title}</h3>
        {cuelist.length > 0 ?
        <div className='admin-result-parent'>
            {cuelist.map((cue, index)=>(
                <span key={index} className={`admin result-each fullwidth ${cue.priority ? 'res-result':''}`}>
                    <small className='q-label'>⚐ Queue ID {cue.gid}</small>
                    <div className='q-id'>{cue.genid}</div>
                    {cue.note.length > 0 &&
                    <div className='q-note'>
                        {cue.note}
                    </div>}

                    <div className='admin-update-del'>
                        <ButtonPriorityResult cueid={cue.id} cuepriority={cue.priority} cuegid={cue.gid} searchDocument={searchDocument}/>
                        {cue.priority && 
                            <ButtonServingResult cueid={cue.id} cueserving={cue.serving}  cuegid={cue.gid} searchDocument={searchDocument}/>
                        }
                        <ButtonDeleteResult cueid={cue.id} gid={cue.gid}/>
                    </div>
                    {cue.priority && <ButtonAnnounceResult cuegenid={cue.genid} />  }
                </span>
            ))}
        </div>
         :
        <div className='admin-noticebar'><span>⚍</span> Please Add a Queue</div>
        }
    </aside>
  )
}

AdminResultBox.defaultProps = {
    title: 'Queue Lists',
}


export default AdminResultBox
