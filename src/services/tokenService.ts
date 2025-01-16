// services/tokenService.ts
import Cookies from 'js-cookie';

const TOKEN_KEY = 'user_token';

export const tokenService = {
    setToken(token: string) {
        Cookies.set(TOKEN_KEY, token, { secure: true, sameSite: 'Strict' });
    },

    getToken(): string | undefined {
        return Cookies.get(TOKEN_KEY);
    },

    removeToken() {
        Cookies.remove(TOKEN_KEY);
    }
};

export const validateToken = (token: string | null | undefined): string => {
    if (!token) {
        throw new Error('Authentication token is missing.');
    }
    return token;
};
