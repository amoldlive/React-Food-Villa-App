import { useEffect, useState } from "react";

const useConnectionStatus=()=>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline=()=>{
            setIsOnline(navigator.onLine);
        }

     
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOnline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("online",handleOnline);
        }

    },[]);

    return isOnline;
}

export default useConnectionStatus;