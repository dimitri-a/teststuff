import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    render() {
        return (
            <div>

                <div className="col-md-3">
                    <img src={this.props.details.avatar} alt=""/>
                    <a onClick={this.modalToggle}>{this.props.details.firstName}</a>
                </div>
                <div className="col-md-9">

                </div>


                <Modal details={this.props.details} ></Modal>

            </div>
        );
    }
}
