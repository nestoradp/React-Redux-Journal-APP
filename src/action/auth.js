import {TYPES} from "../Types/types";
import {firebase, googleAuthProvider} from "../firebase/firebase-config";


export const authGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))


            })
    }
}




 export const login=(uid, displayName)=>({
  type: TYPES.LOGIN,
  payload:{
   uid,
   displayName

  }
 })




