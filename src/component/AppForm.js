import React from 'react';
import { v4 as uuidV4 } from 'uuid';

//输入事项
var styles = {
    'title': {
        display: 'inline-block',
        marginRight: 20
    }
};
// 创建一个ref来存储textInput的DOM元素
/*这里注意要安装uuid：npm install uuid -D*/
/*handleSubmit：将用户输入的数据,通过uuid生成的id、输入的text、以及是否完成false,通过函数传递给父组件*/
class AppForm extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            AddTodoItem:this.props.AddTodoItem,
            tip:"",
            value:""
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
        //事项
        let inputValue = this.state.value;
        console.log(inputValue);
        if (inputValue==="") {
            this.setState({tip:'输入的事项不能为空'});
            return;
        }
        this.setState({tip:''});
        //uuid
        let id=uuidV4();
        this.state.AddTodoItem({id,text:inputValue,complete:false,deleteFlag:false});
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={styles.title}>
                    <input type='text' placeholder='请输入您的代办事项' className='input' value={this.state.value} onChange={this.handleChange}/>
                </div>
                <button type='submit' id='add-todo'>
                    添加
                </button>
                <span className='tip'>{this.state.tip}</span>
            </form>
        )
    }
}

export default AppForm;