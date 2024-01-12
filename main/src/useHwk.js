import { useState } from "react";
export const useHwk = (initVal = false) => {
    const [state,setState] = useState(initVal);
    const toggle = () => {
        setState((prev) => !prev)

    }
    return [state, toggle]
    
}