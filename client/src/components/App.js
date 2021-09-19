import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import useAsync from '../customhooks/useAsync';

async function detectLangsFn(query){
  const dataToSubmit = { query };
  const response = await axios.post('/api/translate', dataToSubmit);
  return response.data;
}

async function translateFn(source, text){
  const dataToSubmit = { source, text };
  const response = await axios.post('/api/translate', dataToSubmit);
  return response.data;
}

function App() {
  const [text, setText] = useState('');
  const [state, fetchData] = useAsync(() => detectLangsFn(text));
  const []

  const onClick = async () => {
    try{
      setLoading(true);
      setError(null);
      setTranslated(null);
      // const dataToSubmit = {
      //   source: 'ko',
      //   text: '만나서 반가워!'
      // };
      // const response = await axios.post('/api/translate', dataToSubmit);
      const dataToSubmit = {
        query: '안녕'
      };
      const response = await axios.post('/api/detectLangs', dataToSubmit);
      console.log(response.data.langCode);
      //setTranslated(response.data.message.result.translatedText);
    }
    catch(e){
      setError(e);
    }
    setLoading(false);
  }

  if(loading) return <div >로딩중...</div>;
  if(error) return <div>에러가 발생했습니다: {error}</div>;

  return (
    <div className="App">
      <button onClick={onClick}>click</button>
      {translated &&
        <div>{translated}</div>
      }
    </div>
  );
}

export default App;
