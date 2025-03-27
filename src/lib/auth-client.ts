import { passkeyClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // Browser should use the current origin
        return window.location.origin;
    }
    // SSR should use the environment variable or fallback
    return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
};

export const authClient = createAuthClient({
    plugins: [passkeyClient()],
    baseURL: getBaseUrl(),
    basePath: '/api/auth',
});
