import { createAuthClient } from "better-auth/react";

type AuthClient = ReturnType<typeof createAuthClient>;

export const authClient: AuthClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL!,
});

export const {
    signIn,
    signUp,
    signOut,
    useSession,
} = authClient;

export const signInWithGoogle = async () => {
    try {
        const data = await signIn.social({
            provider: "google",
        });

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};