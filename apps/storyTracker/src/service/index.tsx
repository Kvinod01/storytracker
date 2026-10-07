interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: HeadersInit;
    body?: any;
}

export const makeRequest = async (url: string, options: RequestOptions = {}) => {
    const { method = 'GET', headers = {}, body } = options;

    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
    }

    try {
        const response = await fetch(url, {
            method,
            headers: defaultHeaders,
            body: body ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};