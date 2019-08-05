import React, {Component} from "react";


class User extends Component {
    state = {
        active: this.props.active,
    };

    toggleStatus = () => {
        let activeStatus = !this.state.active;
        this.setState({active: activeStatus});
        this.props.status(this.props.id, activeStatus);
    };



    render() {
        return (
            <tr className="table-content">
                <td><input type="checkbox"/></td>
                <td>{this.props.type}</td>
                <td className="table-content_name">{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>


                { this.state.active === true ? <td onClick={this.toggleStatus} className="table-content_active"></td> :
                    <td onClick={this.toggleStatus} className="table-content_nonactive">Not active</td>
                }


            </tr>

        )
    }
}

export default User;