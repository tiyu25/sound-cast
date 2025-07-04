import { useEffect, useState } from "react";
import FormButton1 from "./button/FormButton1";
import InputField from "./form/InputField";
import { join } from "../api/join";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router";

const JoinForm = () => {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordCheck, setPasswordCheck ] = useState("");

    const [ passwordMessage, setPasswordMessage ] = useState(""); // 비밀번호 확인 상태 메시지
    const [ isPasswordMatch, setIsPasswordMatch ] = useState<boolean | null>(null);

    useEffect(() => {
        if (passwordCheck === "") {
            setIsPasswordMatch(null);
            setPasswordMessage("");
            return;
        }

        if (password === passwordCheck) {
            setIsPasswordMatch(true);
            setPasswordMessage("비밀번호가 일치합니다.");
        } else {
            setIsPasswordMatch(false);
            setPasswordMessage("비밀번호가 일치하지 않습니다.");
        }
    }, [password, passwordCheck])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 유효성 검사
        if (!email || !password || !passwordCheck) {
            alert("모든 입력값을 입력해주세요.");
            return;
        }

        // 비밀번호가 6자 이상이 아닐 때
        if (password.length < 6) {
            alert("비밀번호는 6자 이상이여야 합니다.");
            return;
        }

        // 비밀번호, 비밀번호 확인 일치하지 않을 때
        if (password !== passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }


        try {
            await join(email, password);
            alert("회원가입에 성공했습니다.");

            // 성공 후 로그인 페이지로 이동
            navigate("/login");
            
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
                >
                    <ul className="list1 mt8 mb15">
                        <li>비밀번호는 6자 이상 입력해주세요.</li>
                    </ul>
                </InputField>
                <InputField
                    type="password"
                    id="userPasswordCheck"
                    name="userPasswordCheck"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    inputClassName="input-field-st1"
                    placeholder="비밀번호 확인"
                >
                    <div className="password-check mt8">
                        {isPasswordMatch !== null && (
                            <p className={ isPasswordMatch ? "match" : "unmatch" }>
                                {passwordMessage}
                            </p>
                        )}
                    </div>
                </InputField>
                <FormButton1
                    type="submit"
                    className="button-bace1 mt10"
                >
                    회원가입
                </FormButton1>
            </form>
        </div>
    )
}
export default JoinForm;