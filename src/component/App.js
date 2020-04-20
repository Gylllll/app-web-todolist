import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'

//整体
class App extends React.Component {
    constructor(props){
        super(props);
        this.onAddTodoItem=this.onAddTodoItem.bind(this);
        this.chooseValue=this.chooseValue.bind(this);
        this.onChangeComplete=this.onChangeComplete.bind(this);
        this.onDeleteItem=this.onDeleteItem.bind(this);
        this.state={
            chooseValue : 1,
            data:""
        };
    }

    onAddTodoItem (newItem) {
        let newData = this.props.data.push(newItem);
        this.setState({data:newData});
    }

    chooseValue (id) {
        this.setState({chooseValue:id});
    }

    onChangeComplete (id) {
        let change= this.props.data.map(item=> {
            if(item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        });
        this.setState({data : change});
    }

   onDeleteItem (id) {
        let del= this.props.data.map(item=> {
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
                <AppForm addTodoItem={this.onAddTodoItem} />
                <AppList data={this.props.data}
                         chooseValue={this.state.chooseValue}
                         changeComplete={this.onChangeComplete}
                         deleteItem={this.onDeleteItem}
                />
                <AppFooter submitChooseValue={this.chooseValue}/>
            </div>
        )
    }
}

export default App;