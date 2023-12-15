export type User = {
    name: string;
    email: string;
}

export type Session = {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export type RegisterRequest = {
    name: string;
    email: string;
    password: string;
}