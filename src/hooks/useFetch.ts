// src/hooks/useApi.js
"use client";

import { useState, useEffect } from 'react';
import api from '@/services/api'; // axios instance

const useApi = (endpoint: string, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/${endpoint}`);
                if (mounted) setData(response.data);
            } catch (err) {

                if (mounted) {
                    if (err instanceof Error) {
                        setError(err);
                    } else {
                        setError(new Error('Unknown error'));
                    }
                }

            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchData();
        return () => { mounted = false };
    }, deps);

    return { data, loading, error };
};

export default useApi;
