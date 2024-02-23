import { useState,useContext } from "react";
import { CueContext } from "../App.js"
// Firebase Connection
import '../FirebaseCongfig.js'
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
const db = getFirestore();
//const genUseID = useId();

const AdminForm = () => {
    const [cuelist,setCuelist ] = useContext(CueContext);
    const generateRandomId = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
    const uniqueId = generateRandomId(10);  

    let id = Math.floor(Math.random() * 100) + 1;
    id += 1;
    const anotherValID = `X0${uniqueId}`;

    const idvalue = () => {
        const idGenerate = Math.floor(Math.random() * 100);
        return `JM0${idGenerate}`;
      }
    
      var idsolo = idvalue();


    const [genid, setGenid] = useState(idsolo);
    const [priority, setGenpriority] = useState(false);
    const [serving, setGenserving] = useState(false);
    const [note, setGennote] = useState('');
    const [gid, setGid] = useState(anotherValID);

    const addDbSet = (cueobj) => {  
        const saveDataToFirestore = async () => {
            const docRefSet = doc(db,'cueListsDb',gid)
            setGid(anotherValID);
            try {
                await setDoc(docRefSet, {...cueobj});
                alert('Document Added');
                console.log(docRefSet.id);
            } catch (error) {
                console.error('Error Adding document:', error);             
            }
        };
        saveDataToFirestore();
    }   


    
    const addcue = (cueobj) => {
        const singleobj = {id, ...cueobj}  
        setCuelist([...cuelist, singleobj])
        addDbSet(singleobj);
        
    }

  const submitData = (e) => {
    const idsolov2 = () => {
        let idGenerate = Math.floor(Math.random() * 100);
        idGenerate +=1;
        return `JM0${idGenerate}`;
      }

    e.preventDefault();
    
    addcue({genid,priority,serving,note,gid});
    setGenid(idsolov2);
    setGennote('');
    setGenpriority(false);
    setGenserving(false);
  }  



  return (
    <article className='form-parent'>
        <h3 className='admin-result-head'>Queue Form</h3>
        <form className='add-form' onSubmit={submitData}>
            <div className='form-control q-add-id'>
                <label>➤ Generated ID</label>
                <input type='text' name='genId' className='add-id' placeholder={genid} disabled />
            </div>
            <div className='form-control q-add-parent'>
                <span className='child-check prime1'>
                    <label>☗ Priority</label>
                    <input value={priority} checked={priority} name='genPriority' type='checkbox' onChange={(e)=> setGenpriority(e.currentTarget.checked)}/>
                </span>
                <span className='child-check prime2'>
                    <label>✔ Serving</label>
                    <input value={serving} checked={serving} name='genServing' type='checkbox' onChange={(e)=> setGenserving(e.currentTarget.checked)}/>
                </span>
            </div>
            <div className='form-control q-add-note'>
                <input value={note} type='text' name='genNote' className='add-note' placeholder='Any Notes...' onChange={(e)=> setGennote(e.target.value)}/>
            </div>
            <input type='submit' value='✚ Add Queue' className='add-btn btn-block' />
        </form>
    </article>
  )
}

export default AdminForm
