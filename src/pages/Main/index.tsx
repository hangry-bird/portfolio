import React from "react";
import styled from "styled-components";

type activeType = {
    active: boolean;
};

const MainPage = () => {
    return (
        <CustomContainer active>
            <span>styled-components css test</span>
        </CustomContainer>
    )
}
export default MainPage;


const CustomContainer = styled.div<activeType>`
    width: "100%";

    background: ${props => {
        return props.theme.color.main;
    }};

    color: ${props => {
        if (props.active) {
            return "white";
        }
        return "#eee";
    }};
`;
