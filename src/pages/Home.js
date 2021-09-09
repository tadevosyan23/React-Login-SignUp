import React from "react";
import {StyledSubtitle, StyledTitle, Avatar, StyledButton, ButtonGroup} from "../components/Styles";
import Logo from './../assets/logo.png'

const Home = () => {
    return (
        <div>
            <div style={{
                position:"absolute",
                top:0,
                left:0,
                backgroundColor:"transparent",
                width:"100%",
                padding:"15px",
                display:"flex",
                justifyContent:"flex-start"
            }} >
                <Avatar image={Logo} />
            </div>

            <StyledTitle size={65} >
                React/Redux
            </StyledTitle>
            <StyledSubtitle size={27} >
                | React Login System with Redux, Formik |
            </StyledSubtitle>
            <ButtonGroup>
                <StyledButton to="/login" >Login</StyledButton>
                <StyledButton to="/signup" >Signup</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Home