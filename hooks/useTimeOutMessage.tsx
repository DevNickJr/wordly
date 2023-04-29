import React from 'react';


const useTimeOutMessage = (message='', time=1500) => {
    const [messageState, setMessageState] = React.useState(message);
    
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setMessageState('');
        }, time);
    
        return () => clearTimeout(timeout);
    }, [message, time, messageState]);
    
    return { messageState, setMessageState };
    }

export default useTimeOutMessage;