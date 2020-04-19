import React from 'react'
import AppTodo from './AppTodo'

//事项列表
class AppList extends React.Component {
    constructor(props) {
        super(props);
        this.ChangeDone = this.ChangeDone.bind(this);
        this.SubmitDelete = this.SubmitDelete.bind(this);
        this.state={
            data:this.props.data
        }
    }

    ChangeDone(id) {
        this.props.ChangeComplete(id);
    }

    SubmitDelete(id) {
        this.props.DeleteItem(id);
    }

    render() {
        var chooseValue = this.props.chooseValue.toString();
        const list = this.state.data.map(({id, text, complete, deleteFlag}, index) => {
            if (chooseValue === '1' && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone}
                        DeleteItem={this.SubmitDelete}
                    />);
            }

            if (chooseValue=== '2' && complete === false && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone}
                        DeleteItem={this.SubmitDelete}
                    />);
            }

            if (chooseValue=== '3' && complete === true && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        ChangeCompleteItem={this.ChangeDone}
                        DeleteItem={this.SubmitDelete}
                    />);
            }

        });

        return (
            <div> {list} </div>
        )
    }
}

export default AppList;