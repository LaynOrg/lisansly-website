import type { RegisterRequest, Session, LoginRequest } from "../types";
import ResponseError from "../errors/response";
import { jwtDecode } from "jwt-decode";

class AuthClient {
    private readonly apiUrl: string;

    constructor() {
        const config = useRuntimeConfig();
        this.apiUrl = config.public.apiUrl;
    }

    public async register({ email, name, password }: RegisterRequest): Promise<Session | ResponseError> {
        const { data, error } = await useFetch(`${this.apiUrl}/register`, {
            method: 'POST',
            body: { email, name, password },
        })

        if (error.value) {
            const status = error.value.statusCode;
            const message = status === 409 ? 'register.409' : '500';
            const err = new ResponseError(message, status);
            return err;
        }
        const accessToken = data.value.accessToken;
        const decodedAccessToken = jwtDecode(accessToken);
        const session: Session = {
            accessToken,
            refreshToken: data.value.refreshToken,
            user: {
                name: decodedAccessToken.name,
                email: decodedAccessToken.email,
            },
        }
        return session;
    }

    public async login({ email, password }: LoginRequest): Promise<Session | ResponseError> {
        const { data, error } = await useFetch(`${this.apiUrl}/login`, {
            method: 'POST',
            body: { email, password },
        })

        if (error.value) {
            const status = error.value.statusCode;
            const message = status === 401 ? 'login.401' : '500';
            const err = new ResponseError(message, status);
            return err;
        }
        const accessToken = data.value.accessToken;
        const decodedAccessToken = jwtDecode(accessToken);
        const session: Session = {
            accessToken,
            refreshToken: data.value.refreshToken,
            user: {
                name: decodedAccessToken.name,
                email: decodedAccessToken.email,
            },
        }
        return session;
    }
}

export default AuthClient;