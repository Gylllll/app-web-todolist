import React from 'react'

//筛选按钮
class AppFooter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAll = this.handleAll.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleAll(event) {
        let all = event.target.value;
        this.props.submitChooseValue(all);
    }

    handleActive(event) {
        let active = event.target.value;
        this.props.submitChooseValue(active);
    }

    handleComplete(event) {
        let complete = event.target.value;
        this.props.submitChooseValue(complete);
    }

    render() {
        return (
            <div>
                <h2>请点击下列按钮以筛选事项</h2>
                <button
                    className='all'
                    value='1'
                    onClick={this.handleAll}
                >
                    全部
                </button>
                <button
                    className='active'
                    value='2'
                    onClick={this.handleActive}
                >
                    未完成
                </button>
                <button
                    className='complete'
                    value='3'
                    onClick={this.handleComplete}
                >
                    已完成
                </button>
            </div>
        )
    }
}

export default AppFooter;