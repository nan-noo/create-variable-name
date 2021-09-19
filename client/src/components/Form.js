import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CaseButtons from './CaseButtons';

const FormBox = styled.form`
    display: flex;
`;

const Input = styled.input`
    padding: 2px 10px;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    font-size: 16px;
`;

const SubmitBtn = styled.button`
    padding: 2px 10px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;

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

async function papago(query){
    const response = await axios.post('/api/detectLangs', {query});
    if(response.data.langCode === 'en') return query;

    const res = await axios.post('/api/translate', {source: response.data.langCode, text: query});
    return res.data.message.result.translatedText;
};

function Form() {
    const [error, setError] = useState(null);
    const [text, setText] = useState('');
    const [resultText, setResultText] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        setError(null);
        setResultText('');
        try{
            const result = await papago(text);
            setResultText(result);
        }
        catch(e){
            console.log(e);
            setError(e);
        }
        
        setText('');
    };

    return (
        <>
            <FormBox onSubmit={onSubmit}>
                <Input placeholder='변수 명을 적어주세요' value={text} onChange={e => setText(e.target.value)}/>
                <SubmitBtn>확인</SubmitBtn>
            </FormBox>
            <CaseButtons error={error} resultText={resultText} setResultText={setResultText}/>
        </>
    )
}

export default Form
