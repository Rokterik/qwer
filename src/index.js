import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id : 1, message: 'Hi, how are you', likescount: ' ' + 52},
  {id : 2, message: 'It`s my first post', likescount: ' ' + 51},
  {id : 3, message: 'Hi', likescount: ' ' + 12},
  {id : 4, message: 'Bye', likescount: ' ' + 11}
];

let dialogs = [
  {id : 1, name: 'Salohiddin'},
  {id : 2, name: 'Abduqodir'},
  {id : 3, name: 'Ibrohim'},
  {id : 4, name: 'Shohjahon'},
  {id : 5, name: 'Xurshid'},
  {id : 6, name: 'Abror'}
]

let messages = [
  {id : 1, message: 'Salom'},
  {id : 2, message: 'Ish;aring yaxshimi?'},
  {id : 3, message: "Zo'r"},
  {id : 4, message: "Zo'r"},
  {id : 5, message: "Zo'r"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
