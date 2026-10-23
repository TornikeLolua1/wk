import { useState, useEffect, useRef } from 'react';


const clean = hash => hash.replace(/^#/, '');


const useHash = (initial, allowed) => {
   
    const [ hash, setHash ] = useState(initial);

    
    const firstHash = useRef(clean(window.location.hash));

   
    const lastHash = useRef(initial);

    useEffect(()=>{
        
        if (!initial || !allowed || allowed.length === 0) return;

       
       
        const startHash = allowed.includes(firstHash.current) ? firstHash.current : initial;
        setHash(startHash);
        lastHash.current = startHash;
        window.history.replaceState(null, '', '#' + startHash);

        
        const updateHashFromURL = event => {
            const newHash = clean(window.location.hash);
            if (allowed.includes(newHash)) {
               
                setHash(newHash);
                lastHash.current = newHash;
            } else {
                
                window.history.replaceState(null, '', '#' + lastHash.current);
            }
        }

        window.addEventListener('hashchange', updateHashFromURL);

        
        return () => window.removeEventListener('hashchange', updateHashFromURL);
    }, [initial, allowed]);

    const setHashAndSync = newHash => {
        
        if (newHash !== hash) {
            setHash(newHash);
            lastHash.current = newHash;
            window.history.pushState(null, '', '#' + newHash);
        }
    }

   
    return [ hash, setHashAndSync ];
}

export default useHash;
