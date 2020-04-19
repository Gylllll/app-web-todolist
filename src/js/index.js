import React from 'react'
import ReactDOM from 'react-dom'
import App from '../component/App'
import '../css/style.css'

let data = [
    {id: 1, text: 'TypeScript中文文档阅读', complete: false, deleteFlag: false},
    {id: 2, text: 'React中文文档', complete: false, deleteFlag: false},
    {id: 3, text: '待完成事项', complete: true, deleteFlag: false},
];

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);