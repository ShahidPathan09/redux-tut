import React, { useState } from "react";

function Task() {
    const [text, setText] = useState("");
    return (
        <div>
            {text.length}<br />
            <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
        </div>
    )
}

export default Task;
