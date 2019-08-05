import React, {Component} from "react";


class User extends Component {
    state = {

    };


    render() {
        return (
            <tr>
                <td>checkbox</td>
                <td>{this.props.type}</td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.status}</td>
            </tr>

        )
    }
}

export default User;