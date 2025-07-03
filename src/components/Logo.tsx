import { Link } from "react-router";

const Logo = () => {
    return (
        <div className="logo-toggle-button">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM18 14H0V16H18V14Z" fill="white"/>
                </svg>
            </button>
            <Link to="/"><img src="./img/logo.png" /></Link>
        </div>
    )
}

export default Logo;