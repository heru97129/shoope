
import { collection, addDoc, serverTimestamp, getDocs, doc, query,updateDoc,where} from 'firebase/firestore'
import db from '../config'


class AddProducts {
   
    constructor(){
      this.collectionRef = 'products'
      this.db = db
      this.dope = {}

    }


   async addList(product,id){
        try {
            await addDoc(collection(this.db,this.collectionRef), {
                id:id,
              product: product,
              timestamp: serverTimestamp()
            })
          } catch (err) {
            console.log(err);
          } 
    }

  async  fetchdata(){
     return   await getDocs(collection(this.db,this.collectionRef)).then((todo) => {
            let data = todo.docs.map((doc) => {
                return doc.data()
            })
            return data
            }).catch((err) => {
              console.log(err);
            })
    }


    async updateData(id,product){
     console.log(id,product,'yooo')
            try {
            //   const todoDocument = doc(this.db,this.collectionRef, 'KwrDqVxuWJmMAYEEIrSa');
              await updateDoc(doc(this.db,this.collectionRef, id), {
                product: product
              });
        
            } catch (err) {
              console.log(err);
            }
          
    }


    async Get(){
      const q = query(collection(this.db, this.collectionRef), where("name", "==", 'kevin'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       this.dope = {...doc.data()}
      });

      return this.dope
    }

   
}



export default AddProducts