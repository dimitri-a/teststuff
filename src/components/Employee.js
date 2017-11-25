import React, {Component} from 'react';

export default class Employee extends Component {
    render() {     
        return (<div>

                {this.props.details.firstName}
            </div>
        );
    }
}
