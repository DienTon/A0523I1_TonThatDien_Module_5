import { useState } from "react";
function Counter(){
    const [count, setcount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setcount(newValue);
    }
    
    return (
        <div>
            <h1>Giá trị: {count}</h1>
            <button onClick={handleClick}>Tăng</button>
        </div>
    )
}
export default Counter;
