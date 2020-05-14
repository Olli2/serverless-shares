import { useState, useEffect } from 'react';
import {fetchShares} from '../services/shares-service/shares';

export const useShares = () => {
    const [shares, setShares] = useState();
    const [pending, setPending] = useState();
    const [error, setError] = useState();
    useEffect(() => {
      
        const callFetchShares = async () => {
            setPending(true);
            setError(undefined);
            
            try {
                const response = await fetchShares()
                setShares(response.data)
                setPending(false)
            } catch (exception) {
                setError(exception)
                setPending(false)
            }
      }
  
      callFetchShares()
    }, [])

    return {shares, pending, error}
}