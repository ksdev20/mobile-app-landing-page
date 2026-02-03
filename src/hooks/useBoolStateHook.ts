import { useState } from "react";

export function useBoolStateHook(defaultValue: boolean = false){
    const [state, setState] = useState(defaultValue);
    const onClick = () => {
        setState(prev => !prev);
    }
    return {state, onClick};
}