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
                <h1>{this.props.employees.companyInfo.companyName}</h1>

                <h3 className='col-lg-6'>{this.props.employees.companyInfo.companyMotto}</h3>
                <h3 className='col-lg-6 text-right'>Since {Date(this.props.employees.companyInfo.companyEst)}</h3>

                <div className="row">
                    <div className="col-md-4">
                        {display}
                    </div>
                </div>
            </div>
        );
    }
}
