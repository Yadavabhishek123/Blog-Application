export const Login_start = ({userCredential}) => ({
    type: "LOGIN_START"
})

export const Login_Succ = (user) => ({
    type: "LOGIN_SUCC",
    payload: user
})

export const Login_Failure = () => ({
    type: "LOGIN_FAILURE",
})