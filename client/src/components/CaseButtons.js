import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const BtnBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const CamelButton = styled.button`
    padding: 5px;

    box-shadow: 0 0 8px 0 rgba(0,0,0, .2);
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
`;

const SnakeButton = styled.button`
    padding: 5px;

    box-shadow: 0 0 8px 0 rgba(0,0,0, .2);
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
`;

const ResultText = styled.div`
    width: 80%;
    text-align: center;
`;

function CaseButtons({error, resultText}) {
    const [query, setQuery] = useState('');
    useEffect(() => {
        setQuery(resultText);
    }, [resultText])

    const toCamelCase = () => {
        let text = resultText.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        })
        setQuery(text);
    };

    const toSnakeCase = () => {
        let text = resultText.charAt(0).toLowerCase() + resultText.slice(1) // lowercase the first character
            .replace(/\W+/g, ' ') // Remove all excess white space and replace & , . etc.
            .replace(/([a-z])([A-Z])([a-z])/g, "$1 $2$3") // Put a space at the position of a camelCase -> camel Case
            .split(/\B(?=[A-Z]{2,})/) // Now split the multi-uppercases customerID -> customer,ID
            .join(' ')
            .split(' ')
            .join('_')
            .toLowerCase()
        setQuery(text);
    };

    return (
        <>
            {error
                ? <ResultText>!ERROR!</ResultText>
                : <ResultText>{query}</ResultText>
            }
            <BtnBox>
                <CamelButton onClick={toCamelCase}>camelCase</CamelButton>
                <SnakeButton onClick={toSnakeCase}>snake_case</SnakeButton>
            </BtnBox>
        </>
    )
}

export default CaseButtons
