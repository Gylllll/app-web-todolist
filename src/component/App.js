import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'

//整体
//OnAddTodoItem：添加事项
class App extends React.Component {
    constructor(props){
        super(props);
        this.OnAddTodoItem=this.OnAddTodoItem.bind(this);
        this.ChooseValue=this.ChooseValue.bind(this);
        this.OnChangeComplete=this.OnChangeComplete.bind(this);
        this.OnDeleteItem=this.OnDeleteItem.bind(this);
        this.state={
            chooseValue : 1,
            data: this.props.data
        };
    }

    OnAddTodoItem (newItem) {
        let newData = this.state.data.push(newItem);
        this.setState({data:newData});
    }

    ChooseValue (id) {
        this.setState({chooseValue:id});
    }

    OnChangeComplete (id) {
        let change= this.state.data.map(item=> {
            if(item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });
        this.setState({data : change});
    }

   OnDeleteItem (id) {
        let del= this.state.data.map(item=> {
            if (item.id === id) {
                item.deleteFlag = true
            }
            return item;
        });
        this.setState({data:del});
    }

    render () {
        return (
            <div id='main'>
                <h1>My TodoList with React</h1>
                <AppForm AddTodoItem={this.OnAddTodoItem} />
                <AppList data={this.state.data}
                         chooseValue={this.state.chooseValue}
                         ChangeComplete={this.OnChangeComplete}
                         DeleteItem={this.OnDeleteItem}
                />
                <AppFooter SubmitChooseValue={this.ChooseValue}/>
            </div>
        )
    }
}

export default App;