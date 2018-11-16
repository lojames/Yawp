import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    this.props.processLogin(user);
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
            <h3>Log In to Yelp</h3>
            <span className="sub-text">New to Yelp? <Link to="/signup">Sign up</Link></span>
            <span>By logging in, you agree to absolutely nothing!</span>
          </div>
          <div className="auth-form-container">
            <form onSubmit={this.handleSubmit} className="auth-form-box">
              <div className="login-form">
                <input type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  required
                />
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  required
                />
                <Link to="/">Forgot password?</Link>
                <input className="auth-submit" type="submit" value="Log In" />
                <span className="swap-auth">New to Yelp? <Link to="/signup">Sign up</Link></span>
              </div>
            </form>
          </div>
          <img src='/auth_image.png' />
        </span>
        <span>FOOTER GOES HERE</span>
      </div>
    );
  }
}

export default withRouter(LoginForm);
