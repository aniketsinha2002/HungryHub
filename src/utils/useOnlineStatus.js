import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(null);

    useEffect(() => { 
        // Initial check
        setOnlineStatus(navigator.onLine);

        const handleOffline = () => {
            setOnlineStatus(false);
        };

        const handleOnline = () => {
            setOnlineStatus(true);
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;
