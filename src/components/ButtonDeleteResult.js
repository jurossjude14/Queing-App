import { useContext } from "react";
import { CueContext } from "../App.js";
import { getFirestore, deleteDoc , collection, doc } from "firebase/firestore"; 
const db = getFirestore();

const ButtonDeleteResult = ({cueid, gid}) => {
  const [cuelist,setCuelist] = useContext(CueContext);

    const deleteData = async (id) => {
      const docRef = doc(collection(db, 'cueListsDb'), id); // Replace 'yourCollectionName' with your actual collection name
      try {
          await deleteDoc(docRef);
          // Success message or callback to handle successful deletion
          alert('Document deleted successfully!');
          // Optionally, update your React state to reflect the deleted data
      } catch (error) {
          console.error('Error deleting document:', error);
          // Error handling, e.g., display an error message to the user
      }
  }

  const deletecue = (id) => {
    setCuelist(cuelist.filter((cue)=> cue.id !== id));
    deleteData(gid);
  }

  return (
    <>
      <button className='admin-delete' onClick={()=>deletecue(cueid)}>X</button>
    </>
  )
}

export default ButtonDeleteResult
