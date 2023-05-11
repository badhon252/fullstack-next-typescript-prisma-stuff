import { useState } from "react";

export default funtion FormData(){
    const [title, setTitle] = useState("");
    return(
        <form>
            <input type="text" placeholder="Title..." />
        </form>
    )
}