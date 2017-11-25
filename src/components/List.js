import React, {Component} from 'react';
import Employee from './Employee';

export default class List extends Component {

    render() {
        let display = this.props.employees.employees.map
        (
            (emp) => (
                <Employee details={emp}></Employee>
            )
        )

        return (
            <div>
                {/*header*/}
                <div className='row main'>
                    <h1>{this.props.employees.companyInfo.companyName}</h1>
                    <h3 className='col-lg-6'>{this.props.employees.companyInfo.companyMotto}</h3>
                    <h3 className='col-lg-6 text-right'>Since {new Date(this.props.employees.companyInfo.companyEst).toLocaleDateString()}</h3>
                </div>


                {/*Employee list*/}
                <div>
                    <h3>Our Employees</h3>
                    <hr/>
                    <div className="row">
                        <div>
                            {display}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
