import { Link, useNavigate } from "react-router";
import FormButton1 from "./button/FormButton1";
import InputField from "./form/InputField";
import { useState } from "react";
import { login } from "../api/login";
import { FirebaseError } from "firebase/app";

const LoginForm = () => {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert("이메일 및 비밀번호를 입력해주세요.");
            return;
        }

        try {
            await login(email, password);
            // 로그인 성공 시 메인으로 이동
            navigate("/");
        } catch(e) {
            if (e instanceof FirebaseError) {
                alert(`로그인에 실패하였습니다(${e.message})`)
            } else {
                alert("로그인에 실패하였습니다.");
            }
        }
    }

    return (
        <div className="login-form-box">
            <div className="logo">
                <img src="/img/logo.png" alt="로고" />
            </div>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    id="userId"
                    name="userId"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputClassName="input-field-st1"
                    placeholder="아이디"
                />
                <InputField
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    inputClassName="input-field-st1 mb-0"
                    placeholder="비밀번호"
                />
                <FormButton1
                    type="submit"
                    className="button-bace1"
                >
                    로그인
                </FormButton1>
            </form>
            <div className="join-button">
                아직 회원이 아니신가요?
                <Link to="/join">회원가입</Link>
            </div>
        </div>
    )
}

export default LoginForm;