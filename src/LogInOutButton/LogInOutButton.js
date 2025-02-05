import { UseUserContext } from "./UserProvider";

function LogInOutButton(props) { 
    const LogStatus = props.LogStatus;
    const {setIsLogIn} = UseUserContext()

    const LogoutButton = () => {
        return (
            <button onClick={() => setIsLogIn(false)}>
                登出
            </button>
        )
    }
    
    const LoginButton = () => {
        return (
            <button onClick={() => setIsLogIn(true)}>
                登入
            </button>
        )
    }

    const BanUser = () => {
        setIsLogIn(false)
        return (
            <p>黑名單走開!</p>
        )
    }
    if (props.User === "Tom") {
        return (
        <div>
            <BanUser />

        </div>)
    } if (LogStatus) {
        return (<LogoutButton />)
    } else {
        if (props.User === "Mia" || props.User === "Leo") {
            return (<LoginButton />)
        } else {
            return (<BanUser />)
        }
    }
}



export default LogInOutButton;