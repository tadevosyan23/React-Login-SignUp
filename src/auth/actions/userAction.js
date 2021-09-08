import axios from "axios";
import {sessionService} from "redux-react-session";


export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
    //Make checks and get some data
    axios.post("https://whispering-headland-00232.herokuapp.com/user/signin" , credentials,
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

export const signUpUser = (credentials, history, setFieldError, setSubmitting) => {

}

export const logoutUser = () => {

}