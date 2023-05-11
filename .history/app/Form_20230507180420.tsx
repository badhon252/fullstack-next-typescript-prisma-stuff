import { useState } from "react";

export default FormData(){
    const [title, setTitle] = useState("");
    return(
        <form>
            <input type="text" placeholder="Title..." />
        </form>
    )
}