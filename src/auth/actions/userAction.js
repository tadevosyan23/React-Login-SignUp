import axios from "axios";
import {sessionService} from "redux-react-session";
import {signInUrl, signUpUrl} from "../../api/api";


export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    //Make checks and get some data
    return () => {
        axios.post(signInUrl ,
        credentials,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            const { data } = response

            if (data.status === "FAILED") {
                const { message } = data;
                // check for specific error
                if (message.includes("credentials")) {
                    setFieldError("email" , message)
                    setFieldError("password" , message)
                }else if (message.includes("password")){
                    setFieldError("password" , message)
                }
            }else if (data.status === "SUCCESS") {
                const userData = data.data[0]

                const token = userData._id
                sessionService.saveSession(token).then(() => {
                    sessionService.saveUser(userData).then(() => {
                        history.push("/dashboard")
                        console.log(userData)
                    }).catch(err => console.error(err))
                }).catch(err => console.error(err))
            }

            // Complete submission
            setSubmitting(false)

        }).catch(err => console.log(err))
    }
}

export const signUpUser = (
    credentials,
    history,
    setFieldError,
    setSubmitting
) => {

    return (dispatch) => {
        axios.post(signUpUrl ,
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                const {data} = response
                if (data.status === "FAILED"){
                    const {message} = data;
                    if (message.includes("name")){
                        setFieldError("name" , message)
                    }else if (message.includes("email")){
                        setFieldError("email" , message)
                    } else if (message.includes("date")){
                        setFieldError("dateOfBirth" , message)
                    } else if (message.includes("password")) {
                        setFieldError("password" , message)
                    }

                    // Complete Submision
                    setSubmitting(false)

                }else if(data.status === "SUCCESS") {
                    // Login user after successful signup

                    const {email , password} = credentials
                    dispatch(
                        loginUser({email, password}, history, setFieldError, setSubmitting)
                    )

                }

        }).catch(err => console.log(err))
    }
}

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push('/')
    }
}