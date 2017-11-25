import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    render() {
        return (
            <div>
                <div className='col-lg-4 employee'>
                    <div className="col-lg-4 text-left">
                        <img src={this.props.details.avatar} alt=""/>
                    </div>
                    <div className="col-lg-8">
                        <div>
                            <span className='name'> {this.props.details.firstName} &nbsp;
                            {this.props.details.lastName}</span>
                            <div>
                                {this.props.details.bio.slice(0, 80)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
