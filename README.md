# create-variable-name
nannoo's toy project.   
detect the language of the sentence and translate it into CamelCase or snake_case (in English)   
deploy:
![Generic badge](https://img.shields.io/badge/server-heroku-green.svg)
![Generic badge](https://img.shields.io/badge/client-netlify-yellow.svg)    

https://create-variable-name.netlify.app
***
React + Node(express)    
papago api(detect language & translate)    
https://developers.naver.com/docs/papago/README.md    
***
### Start
1. add 'config.js' file in './server/config/'
2. export your client_id & client_secret to use Papago api
  ```JS
  module.exports = {
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET"
}
  ```
3. npm install
4. npm run dev
***
### modules
|server|client|
|---|---|
|express: ^4.17.1|axios: 0.21.4|
|request: ^2.88.2|styled-components: 5.3.1|
|cors: ^2.8.5||
***
### 실행화면
<img width="100%" alt="실행화면1" src="https://user-images.githubusercontent.com/54002105/135404254-963e336e-2a1b-44c3-9737-ee99737a6dde.png">
<img width="100%" alt="실행화면2" src="https://user-images.githubusercontent.com/54002105/135404748-c603037e-c7aa-43e1-afd6-3e751e4b9d72.gif">    

***
### behind
원래는 react를 이용해서 front-end만 구현하려 했으나, papago api는 서버 사이드에서만 사용이 가능했다. front에서 api를 호출하면 **blocked by CORS policy** 에러가 뜬다.    
서버를 heroku에 배포했는데, cors module을 사용하지 않아서 접근시에 **not allowed by access control allow origin error**가 떴다.
