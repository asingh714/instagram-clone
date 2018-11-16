// import React from "react";
import styled from "styled-components";


const Username = styled.p`
    font-weight: bold;
    ${props => (props.type === "space" ? `margin-right: .5rem` : null)}
`

export default Username