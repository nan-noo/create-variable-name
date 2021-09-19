import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    margin-left: 2px;
    border: none;
    border-radius: 5px;
`;

const ResultText = styled.div`

`;

async function papago(query){
    const response = await axios.post('/api/detectLangs', {query});
    const res = await axios.post('/api/translate', {source: response.data.langCode, text: query});
    return res.data.message.result;
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
            setResultText(result.translatedText);
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
                <Input value={text} onChange={e => setText(e.target.value)}/>
                <SubmitBtn placeholder=''>확인</SubmitBtn>
            </FormBox>
            {error
                ? <ResultText>!ERROR!</ResultText>
                : <ResultText>{resultText}</ResultText>
            }
            
        </>
    )
}

export default Form
