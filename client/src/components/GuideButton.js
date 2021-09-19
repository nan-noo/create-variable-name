import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const GuideBox = styled.div`
    position: fixed;
    right: 30px;
    bottom: 90px;

    padding: 10px;
    
    background: rgba(255,255,255, .8);
    border-radius: 16px;
    border: none;

    z-index: 5;
    transition: 0.125s all ease-in;
`;

const FloatingBtn = styled.button`
    width: 3rem;
    height: 3rem;

    position: fixed;
    right: 30px;
    bottom: 30px;

    border-radius: 25px;
    box-shadow: 0 0 8px 0 rgba(255,255,255, .7);
    border: none;
    outline: none;

    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    transition: 0.125s all ease-in;

    ${props => 
        props.open &&
        css`
            background: #ff6b6b;
            &:hover{
                background: #ff8787;
            }
            &:active{
                background: #fa5252;
            }
        `
    }
`;

function GuideButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {open && 
                <GuideBox>
                    supported languages: <br/>
                    ko, en, ja, zh-CN, zh-TW, <br/>
                    vi, id, th, de, ru, es, it, fr
                </GuideBox>
            }
            <FloatingBtn open={open} onClick={() => setOpen(!open)}>?</FloatingBtn>
        </div>
    )
}

export default GuideButton
