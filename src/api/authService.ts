import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase";

// 회원가입
export const register = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

// 로그인
export const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

// 로그아웃
export const logout = async () => {
    return await signOut(auth);
}