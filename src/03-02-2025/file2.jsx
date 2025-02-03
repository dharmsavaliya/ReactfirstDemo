import * as React from "react";
import {UserContext} from "./file1";

export function ProvideUserDetails(){
    const user = React.useContext(UserContext);
    return (
        <p>
            Username : {user.name}<br />
            Id: {user.id}
            </p>
            );
}
export function Page1(){
    return(
        <div>
            <h1>Page 1</h1>
            <ProvideUserDetails />
        </div>
    );
}