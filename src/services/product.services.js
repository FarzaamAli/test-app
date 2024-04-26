import { child, get, push, ref, set , remove} from "firebase/database"
import { db } from "../config/firebase.config"
import { productEntity } from "../lib/firebase.entities"

const dbRef = ref(db)


export const getAllProducts = async () => {
    try {
        const response = await get(child(dbRef, productEntity))

        if (response.exists()) {
            const data = response.val()
            return Object.values(data)
        }
    } catch (error) {
        console.error('Error', error)
    }
}

export const addProduct = (data) => {
    try {
        const productKey = push(child(ref(db), productEntity)).key
        const productEntityRef = ref(db, productEntity + '/' + productKey)

        const response = set(productEntityRef, {
            pid: productKey,
            ...data
        })

        return response
    } catch (error) {
        console.error('Error', error)
    }
}

export const getProductById = async (pid) => {
    try {
        var res = await get(child(dbRef,`products/${pid}`))
        var data = res.val()
        //console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}
    
export const deleteItem = async (pid) => {
    try {
    //   const productRef = ref(db, 'products/' + pid);
      await remove(ref(db, 'products/' + pid)).then(()=> {
        console.log('add');
      }).catch((error) => console.log(error))
    } catch (error) {
      console.error('Error deleting product from Firebase:', error);
    }
  };



