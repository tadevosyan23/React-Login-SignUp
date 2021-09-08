import React from 'react'
import {ErrorMessage, useField} from "formik";
import {ErrorMsg, StyledIcon, StyledLabel, StyledTextInput} from "./Styles";

//Eye for Password
import { FiEyeOff , FiEye } from 'react-icons/fi'

export const TextInput = ({icon,...props}) => {
    const [field , meta] = useField(props)
    const [show , setShow] = React.useState(false)

    return(
        <div style = {{position:"relative"}} >
            <StyledLabel htmlFor={props.name} >
                {props.label}
            </StyledLabel>
            {   props.type !== "password" &&
                <StyledTextInput
                    invalid={meta.touched && meta.error }
                    {...field}
                    {...props}
                />
            }
            {
                props.type === "password" && (
                    <StyledTextInput
                        invalid={meta.touched && meta.error }
                        {...field} {...props}
                        type={show ? "text" : "password"}
                    />
                )
            }
            <StyledIcon>
                {icon}
            </StyledIcon>
            {
                props.type === "password" &&
                    <StyledIcon onClick={()=> setShow(!show)} right >
                        {show && <FiEye />}
                        {!show && <FiEyeOff />}
                    </StyledIcon>
            }

            {
                meta.touched && meta.error ? (
                    <ErrorMsg>
                        {meta.error}
                    </ErrorMsg>
                ) : (
                    <ErrorMsg style={{visibility: "hidden"}} >
                       .
                    </ErrorMsg>
                )
            }
        </div>
    )
}


