import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [translated, setTranslated] = useState(null);

  const onClick = async () => {
    try{
      //setLoading(true);
      // setError(null);
      // setTranslated(null);

      const response = await axios.get('/api/translate');
      console.log(response.data.message.result);
      //setTranslated(response.data);
    }
    catch(e){
      //setError(e);
    }
    //setLoading(false);
  }

  //if(loading) return <div>로딩중...</div>;
  //if(error) return <div>에러가 발생했습니다: {error}</div>;
  //if(!translated) return null;

  return (
    <div className="App">
      <button onClick={onClick}>click</button>
      {/* {translated &&
        <div>{translated}</div>
      } */}
    </div>
  );
}

export default App;
