import React,{useContext} from "react";
import CustomFooter from "./CustomFooter";
import { startCase } from "lodash";
import { useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";

const MyAccount = () => {
    const {userData}=useContext(UserContext);
    return (
        <>
            <div style={{display: 'flex',flexDirection: 'column', minHeight: '100vh'}}>
                    <div className="container p-5" style={{flex:1}}>
                        <h3>Welcome Back, {startCase(userData.user_fname)}.</h3>
                    </div>
                <CustomFooter style={{ flexShrink: 0 }} />
            </div>
        </>
    )
}

export default MyAccount;