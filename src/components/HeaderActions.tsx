import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HeaderActions = (): JSX.Element => {
    const { user, isLoading } = useAuth();

    // 로그아웃
    const handleLogout = async () => {
        await signOut(auth);
        alert("로그아웃 되었습니다.");
    }

    return (
        <div className="header-actions">
            <button type="button" className="mode-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_28_84)">
                        <path d="M12 17.625C15.1066 17.625 17.625 15.1066 17.625 12C17.625 8.8934 15.1066 6.375 12 6.375C8.8934 6.375 6.375 8.8934 6.375 12C6.375 15.1066 8.8934 17.625 12 17.625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3.375V1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.89683 5.89687L4.57495 4.575" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.375 12H1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.89683 18.1031L4.57495 19.425" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 20.625V22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.1031 18.1031L19.425 19.425" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.625 12H22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.1031 5.89687L19.425 4.575" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_28_84">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                화면 모드 변경
            </button>
            {!isLoading && (
                <>
                    {user ? (
                        <button
                            className="login-btn"
                            onClick={handleLogout}
                        >
                            로그아웃
                        </button>
                    ):(
                        <Link to="/login" className="login-btn">로그인</Link>
                    )}
                </>
            )}


        </div>
    )
}

export default HeaderActions;