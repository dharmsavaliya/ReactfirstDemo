import * as React from "react";
export const UseContext = React.createContext();

function FetchUser(){
    return new Promise ((resolve) => {
    setTimeout(() => {
        resolve({ name:"Rku Student ",id:"1"});
    }, 1000);    
    });
}

export function UserProvider({ children}) {
    const [user, setUser] = React.useState({
        name:"Loading..",
        id:"loading.."
    });
    React.useEffect(() => {
        FetchUser().then((data) => {
            setUser(data);
        });
    }, []);
    return (
        <UseContext.Provider value={user}>
            {children}
        </UseContext.Provider>
    );
}