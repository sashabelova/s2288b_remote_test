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

    renderType() {
        let type;

        if (this.props.type === 'Employee') {
            type =
                <td className="table-content_type type-em">
                    <div>EM</div>
                </td>
        } else if (this.props.type === 'Stakeholder') {
            type =
                <td className="table-content_type type-sh">
                    <div>SH</div>
                </td>
        }
        else if (this.props.type === 'Supervisor') {
            type =
                <td className="table-content_type type-sv">
                    <div>SV</div>
                </td>
        }
        else if (this.props.type === 'Guest') {
            type =
                <td className="table-content_type type-gt">
                    <div>GT</div>
                </td>
        } else {
            type =
                <td className="table-content_type type-un">
                    <div>UN</div>
                </td>
        }

        return type;
    }


    render() {
        return (
            <tr className="table-content">
                <td><input type="checkbox"/></td>
                {this.renderType()}
                <td className="table-content_name">{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>


                { this.state.active === true ? <td onClick={this.toggleStatus} className="table-content_active">
                    <div className="out">
                        <div className="in"></div>
                    </div>
                </td> :
                    <td onClick={this.toggleStatus} className="table-content_active nonactive">
                        <div className="out">
                            <div className="in"></div>
                        </div>
                    </td>
                }


            </tr>

        )
    }
}

export default User;