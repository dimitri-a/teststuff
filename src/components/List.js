import React, {Component} from 'react';
import Employee from './Employee';

export default class List extends Component {

    render() {

        
        console.log('this.props=',this.props);
        let display = this.props.employees.map
        (
            (emp) => (
                <Employee details={emp}></Employee>
            )
        )

        return (<div className="container">
                <div className="row">
                    <div className="col-md-4">

                        {display}
                    </div>
                </div>


            </div>
        );
    }
}
