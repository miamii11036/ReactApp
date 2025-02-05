import LogInOutButton from "./LogInOutButton";
import { UseUserContext } from "./UserProvider";

function LogMenu() {
    const { username, IsLogIn, toggleUser } = UseUserContext();

    return (
        <div>
            <p>使用者名稱: {username}</p>
            <p>登入狀態: {IsLogIn ? "已登入" : "未登入"}</p>
            <button onClick={toggleUser}>變更使用者</button>
            <LogInOutButton LogStatus={IsLogIn} User={username} />
        </div>
    );
}

export default LogMenu;