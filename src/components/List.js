import React, {Component} from 'react';
import Employee from './Employee';

export default class List extends Component {

    render() {
        console.log('this.props=', this.props);
        let display = this.props.employees.employees.map
        (
            (emp) => (
                <Employee details={emp}></Employee>
            )
        )

        return (
            <div>
                <div className='row main'>

                    <h1>{this.props.employees.companyInfo.companyName}</h1>

                    <h3 className='col-lg-6'>{this.props.employees.companyInfo.companyMotto}</h3>
                    <h3 className='col-lg-6 text-right'>Since {Date(this.props.employees.companyInfo.companyEst)}</h3>
                </div>
                <div className="row">
                    <div>
                        {display}
                    </div>
                </div>
            </div>
        );
    }
}
