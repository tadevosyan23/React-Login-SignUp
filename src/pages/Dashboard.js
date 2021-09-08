import React from "react";
import {
    StyledSubtitle,
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors
} from "../components/Styles";
import Logo from './../assets/logo.png'

const Dashboard = () => {
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

            <StyledFormArea bg={colors.dark2} >
                <StyledTitle size={65} >
                    Welcome , User
                </StyledTitle>
                <StyledSubtitle size={27} >
                    React Login System with Redux, Formik | Backend API Connection
                </StyledSubtitle>
                <ButtonGroup>
                    <StyledButton to="#" >Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>

        </div>
    )
}

export default Dashboard