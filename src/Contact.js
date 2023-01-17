import { useContext } from "react";
import { userContext } from "./App";

const Contact = () => {
    const val = useContext(userContext);
    return(
        <>
            <h1>Mobile : {val.mobile}</h1>
        </>
    )
}

export default Contact;