import { useContext } from "react";
import { userContext } from "./App";
import Contact from "./Contact";

const About = () => {

    const val = useContext(userContext);

    return(
        <>
            <h1>Name : {val.name}</h1>
            <h2>Email : {val.email}</h2>
            <h3>Age : {val.age}</h3>
            <Contact/>
        </>
    )
}

export default About;