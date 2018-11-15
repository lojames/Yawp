import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      zip_code: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processSignup(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="auth-container">
        <span className="auth-header"></span>
        {this.renderErrors()}
        <span className="auth-main-container">
          <div className="auth-form-main-head">
            <h3>Sign Up for Yelp</h3>
            <span className="sub-text">Connect with great local businesses</span>
            <span>By signing up, you agree to absolutely nothing!</span>
          </div>
          <div className="auth-form-container">
            <form onSubmit={this.handleSubmit} className="auth-form-box">
              <div className="login-form">
                <section className="username-section">
                  <input type="text"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                  />
                  <input type="text"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                  />
                </section>
                <input type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
                <input type="text"
                  placeholder="Zip Code"
                  value={this.state.last_name}
                  onChange={this.update('zip_code')}
                />
                {this.renderErrors()}
                <input className="auth-submit" type="submit" value={this.props.formType} />
                <span className="swap-auth">Already on Yelp? <Link to="/login">Log in</Link></span>
              </div>
            </form>
          </div>
          <img src={window.authImage} />
        </span>
        <span>FOOTER GOES HERE</span>
      </div>
    );
  }
}

export default withRouter(SignupForm);
