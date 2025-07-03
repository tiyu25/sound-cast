import { useState } from "react";
import FormButton1 from "./button/FormButton1";
import InputField from "./form/InputField";
import { join } from "../api/join";
import { FirebaseError } from "firebase/app";

const JoinForm = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await join(email, password);
            alert("회원가입에 성공했습니다.");
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new Error(e.message);
            } else {
                throw new Error("회원가입에 실패했습니다.");
            }
        }
    }

    return (
        <div className="login-form-box join">
            <strong className="title-text-st1 text-align-center">회원가입</strong>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputClassName="input-field-st1"
                    placeholder="이메일"
                />
                <InputField
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputClassName="input-field-st1"
                    placeholder="비밀번호"
                />
                <InputField
                    type="password"
                    id="userPasswordCheck"
                    name="userPasswordCheck"
                    inputClassName="input-field-st1"
                    placeholder="비밀번호 확인"
                />
                <FormButton1
                    type="submit"
                    className="button-bace1"
                >
                    회원가입
                </FormButton1>
            </form>
        </div>
    )
}
export default JoinForm;