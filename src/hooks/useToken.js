import { useEffect, useState } from "react";

const useToken = email => {
    console.log('insute useToken:', email)
    const [token, setToken] = useState('')

    useEffect(() => {
        if(email){
            fetch(`https://elite-laptop-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    setToken(data.accessToken);
                }
            });
        }
    }, [email]);
    return [token]
}

export default useToken;