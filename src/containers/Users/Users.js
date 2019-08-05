import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import User from "../../components/User/User";

class Users extends Component {
    componentDidMount() {
        this.props.onInitUsers();
    }


    render() {
        const users = this.props.users;

        return (
            <div className="users">
                <div className="table-header">
                    <div className="table-header_users">Users</div>
                    <div className="table-header_selected">selected</div>

                </div>


                <div className="users-table">
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                <input type="checkbox"/>
                            </th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Status</th>
                        </tr>


                        {users.map(user => (
                            <User
                                key={user.id}
                                name={user.name}
                                email={user.email}
                                phone={user.phone}
                                active={user.active}
                                type={user.type}
                                status={(id, active) => this.props.onStatusChange(user.id, active)}
                            />
                        )) }

                        </tbody>
                    </table>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitUsers: () => dispatch(actions.initUsers()),
        onStatusChange: (id, active) => dispatch(actions.statusChange(id, active)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);