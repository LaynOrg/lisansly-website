export type User = {
    name: string;
    email: string;
}

export type Tokens = {
    accessToken: string;
    refreshToken: string;
}

export type Session = {
    user: User;
    tokens: Tokens;
}