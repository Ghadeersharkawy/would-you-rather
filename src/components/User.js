import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

export class User extends Component {

    render() {
        const { user } = this.props;

        return (
            <div className="user">
                <div className="author">{user.name}asks</div>
                <div className='user_avatar'>
                    <Image src={user.avatarURL} roundedCircle />

                </div>
            </div>


        )
    }
}

function mapStateToProps({ users }, props) {
    const user = users[props.userId];

    return {
        user
    };
}

export default connect(mapStateToProps)(User);