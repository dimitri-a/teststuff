import React, {Component} from 'react';

export default class List extends Component {
    render() {
        
       console.log('this.props.employees=',this.props.employees);
        return (<div>
                this is List
            </div>
        );
    }
}
