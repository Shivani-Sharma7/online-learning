import React from "react";
import CustomFooter from "./CustomFooter";
import { startCase } from "lodash";

const myAccount = ({user_data}) => {
    return (
        <>
            <div style={{display: 'flex',flexDirection: 'column', minHeight: '100vh'}}>
                    <div className="container p-5" style={{flex:1}}>
                        <h3>Welcome Back, {startCase(user_data)}.</h3>
                    </div>
                <CustomFooter style={{ flexShrink: 0 }} />
            </div>
        </>
    )
}

export default myAccount;