import React from 'react';
import './Profile.css';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name
        };
    }

    onFormChange = (event) => {
        switch(event.target.name) {
            case 'user-name':
                this.setState({ name: event.target.value });
                break;
            default:
                return;
        }
    }

    onProfileUpdate = (data) => {
        console.log(data);
        fetch(process.env.REACT_APP_SERVER_URL + `/profile/${this.props.user.id}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ formInput: data })
        })
            .then(resp => {
                if (resp.status === 200) {
                    this.props.loadUser({ ...this.props.user, ...data });
                }
                this.props.toggleModal();
            });
    }

    handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onProfileUpdate(this.state);
        }
        else if (event.keyCode === 27) {
            this.props.toggleModal();
        }
    }

    render() {
        const { user, toggleModal, inputRef } = this.props;
        const { name } = this.state;
        return (
            <div className="profile-modal">
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                    <main className="pa4 black-80 w-80">
                        <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />
                        <h1>{this.state.name}</h1>
                        <h4>{`Images submitted: ${user.entries}`}</h4>
                        <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
                        <hr />
                        <label className="mt2 fw6" htmlFor="user-name">Name:</label>
                        <input
                            ref={inputRef}
                            onKeyDown={this.handleKeyDown}
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder={user.name} type="text" name="user-name" id="name" />
                        <div className="mt4" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button onClick={() => this.onProfileUpdate({ name })} className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">
                                Save
                            </button>
                            <button onClick={() => toggleModal()} className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20">
                                Cancel
                            </button>
                        </div>
                    </main>
                    <div className="modal-close" onClick={() => toggleModal()}>&times;</div>
                </article>
            </div>
        );
    }
}


export default Profile;