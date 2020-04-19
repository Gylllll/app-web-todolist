import React from 'react'

var styles = {
    'title': {
        float:'left',
        display: "inline-block",
        marginRight: '20px'
    }
};

//每个事项
class AppTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeComplete=this.handleChangeComplete.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleChangeComplete () {
        this.props.ChangeCompleteItem(this.props.id);
    }

    handleDelete () {
        this.props.DeleteItem(this.props.id);
    }
    render () {
        return (
          <div className='list'>
              <div style={styles.title} className='item-id' title={this.props.id}>{this.props.id}</div>
              <div style={styles.title}
                   className={this.props.complete ? 'line text' : 'text'}
                   title={this.props.text}
                   onClick={this.handleChangeComplete}
              >
                  {this.props.text}
              </div>
              <div style={styles.title}>
                  {this.props.complete ? '已完成' : '未完成'}
              </div>
              <button className='delete-item'
                      onClick={this.handleDelete}
              >删除</button>
          </div>
        )
    }
}

export default AppTodo;