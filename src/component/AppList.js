import React from 'react'
import AppTodo from './AppTodo'

//事项列表
class AppList extends React.Component {
    constructor(props) {
        super(props);
        this.changeDone = this.changeDone.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
    }

    changeDone(id) {
        this.props.changeComplete(id);
    }

    submitDelete(id) {
        this.props.deleteItem(id);
    }

    render() {
        var chooseValue = this.props.chooseValue.toString();
        const list = this.props.data.map(({id, text, complete, deleteFlag}, index) => {
            if (chooseValue === '1' && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        changeCompleteItem={this.changeDone}
                        deleteItem={this.submitDelete}
                    />);
            }

            if (chooseValue=== '2' && complete === false && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        changeCompleteItem={this.changeDone}
                        deleteItem={this.submitDelete}
                    />);
            }

            if (chooseValue=== '3' && complete === true && deleteFlag !== true) {
                return (
                    <AppTodo
                        key={index}
                        id={id}
                        text={text}
                        complete={complete}
                        changeCompleteItem={this.changeDone}
                        deleteItem={this.submitDelete}
                    />);
            }

        });

        return (
            <div> {list} </div>
        )
    }
}

export default AppList;