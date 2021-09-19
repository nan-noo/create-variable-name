import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background: white;
    width: 20rem;
    height: 15rem;

    border-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(255,255,255, .8);
`;

function Container({children}) {
    return (
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}

export default Container
