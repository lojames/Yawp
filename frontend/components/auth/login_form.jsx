import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.removeErrors(this.props.errors);
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
    if (this.props.errors.length > 0){
      const errors = document.getElementById("error-alert-box-id");
      errors.style.display = "flex";
    }
  }

  hideErrors() {
    const errors = document.getElementById("error-alert-box-id");
    errors.style.display = "none";
  };


  renderErrors() {
    const errors = document.getElementById("error-alert-box-id");
    console.log(this.props.errors)
    if (this.props.errors.length === 0)
      return "";
    else {
      return(
        <div className='error-alert-box' id='error-alert-box-id' style={{display:"flex"}}>
          <ul className='login-signup-errors'>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
          <span onClick={this.hideErrors}>×</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/"><img src="/yawp_logo.png" /></Link>
        </div>
        {this.renderErrors()}
        <span className="auth-main-container">
          <div className="auth-left">
            <div className="auth-left-sub">
              <div className="auth-form-main-head">
                <h3>Log In to Yawp</h3>
                <div className="auth-form-main-head-sub-text">New to Yawp? <Link to="/signup">Sign up</Link></div>
                <div className="auth-form-main-head-sub-sub-text">By logging in to Yawp, you don't need to agree to anything!!</div>
              </div>
              <div className="auth-form-container">
                <form onSubmit={this.handleSubmit} className="auth-form-box">
                  <div className="login-form">
                    <input type="email"
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
                  <Link to="/signup" className="small-link">Forgot password?</Link>
                    <input className="auth-submit" type="submit" value="Log In" />
                    <div className='demo-user-swap-auth'>
                      <div className='demo-user' onClick={this.props.demoLogin}>Demo User</div>
                      <div className="swap-auth">New to Yawp? <Link to="/signup" className="small-link">Sign up</Link></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img src='/auth_image.png' />
        </span>
        <div className="main-footer-container">
          <Footer className="footer-container" />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
