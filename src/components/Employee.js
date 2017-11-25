import React, {Component} from 'react';
import Modal from './Modal';

export default class Employee extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            modalOpened: false
        }
    }

    modalToggle = () =>{
        this.setState({ modalOpened: !this.state.modalOpened })
    }

    render() {
        return (
            <div onClick={this.modalToggle}>
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
                <Modal details={this.props.details} modalOpened ={this.state.modalOpened} toggle={this.modalToggle}></Modal>
            </div>
        );
    }
}
