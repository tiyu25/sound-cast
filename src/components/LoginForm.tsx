import { Link } from "react-router";
import FormButton1 from "./button/FormButton1";
import InputField from "./form/InputField";

const LoginForm = () => {
    return (
        <div className="login-form-box">
            <div className="logo">
                <img src="/img/logo.png" alt="로고" />
            </div>
            <InputField
                type="text"
                id="userId"
                name="userId"
                inputClassName="input-field-st1"
                placeholder="아이디"
            />
            <InputField
                type="password"
                id="userPassword"
                name="userPassword"
                inputClassName="input-field-st1 mb-0"
                placeholder="비밀번호"
            />
            <FormButton1
                type="submit"
                className="button-bace1"
            >
                로그인
            </FormButton1>
            <div className="join-button">
                아직 회원이 아니신가요?
                <Link to="/join">회원가입</Link>
            </div>
        </div>
    )
}

export default LoginForm;