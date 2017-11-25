import React, {Component} from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props)


    }


    toggle = () => {
        this.props.toggle();
    }

    render() {

        console.log('this.props=', this.props);

        const coverClass = this.props.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.props.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>

                <div className={containerClass}>
                    <a onClick={this.toggle} className="close"/>
                    <div className='employee'>
                        <div className="col-lg-4 text-left">
                            <img src={this.props.details.avatar} alt=""/>
                            <div>{this.props.details.jobTitle}</div>
                            <div>{this.props.details.age}</div>
                            <div>{Date(this.props.details.dateJoined)}</div>
                        </div>

                        <div className="col-lg-8 detail">
                            <div>
                                <span className='name'> {this.props.details.firstName} &nbsp;
                                    {this.props.details.lastName}</span>
                                <hr/>
                                <div>
                                    {this.props.details.bio.slice(0, 80)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={coverClass} onClick={this.toggle}></div>

            </div>
        )
    }
}