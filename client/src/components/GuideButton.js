import React, {useState} from 'react';
import styled from 'styled-components';

const GuideBox = styled.div`
    position: fixed;
    right: 30px;
    bottom: 90px;

    padding: 5px;
    
    background: white;
`;

const FloatingBtn = styled.button`
    width: 3rem;
    height: 3rem;

    position: fixed;
    right: 30px;
    bottom: 30px;

    border-radius: 25px;
`;

function GuideButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {open && 
                <GuideBox>asdfsd</GuideBox>
            }
            <FloatingBtn onClick={() => setOpen(!open)}>?</FloatingBtn>
        </div>
    )
}

export default GuideButton
