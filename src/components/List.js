import React, {Component} from 'react';
import Employee from './Employee';

export default class List extends Component {

    render() {
        let display = this.props.employees.employees.map
        (
            (emp,id) => (
                <Employee key={id} details={emp}></Employee>
            )
        )

        return (
            <div>
                {/*header*/}
                <header>
                    <h1>{this.props.employees.companyInfo.companyName}</h1>
                    <h3>{this.props.employees.companyInfo.companyMotto}</h3>
                    <h3 className='text-right'>Since {new Date(this.props.employees.companyInfo.companyEst).toLocaleDateString()}</h3>
                    <hr/>
                </header>

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
