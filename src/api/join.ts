import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";


export const join = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (e) {
        if (e instanceof FirebaseError) {
            throw new Error(e.message);
        } else {
            throw new Error("Unexpected error occurred");
        }
    }
}