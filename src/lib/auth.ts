import supabase from "@/supabaseClient";
import { AuthError, User } from "@supabase/supabase-js";

async function loginEmail({email, password}: {email: string, password: string}) {
    const result = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return result
}

async function registerEmail({email, password}: {email: string, password: string}) {
    const result = await supabase.auth.signUp({
        email,
        password,
    })
    return result as {data: {user: User|null}, error: AuthError|null}
}

async function resetPassword({email}: {email: string}) {
    //TODO - implement reset password
    const result = await supabase.auth.resetPasswordForEmail(email)
    return result
}

async function logout() {
    const result = await supabase.auth.signOut()
    return result
}


export const auth = {
    loginEmail,
    registerEmail,
    resetPassword,
    logout
}