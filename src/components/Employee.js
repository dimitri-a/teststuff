import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    render() {
        return (
            <div className='col-lg-4'>
                <div className="col-lg-3">
                    <img src={this.props.details.avatar} alt=""/>

                </div>
                <div className="col-lg-9">
                    <div>
                        {this.props.details.firstName}
                        {this.props.details.lastName}
                        {this.props.details.bio.slice(0,80)}
                    </div>

                </div>

                {/*<Modal details={this.props.details} ></Modal>*/}
            </div>
        );
    }
}
