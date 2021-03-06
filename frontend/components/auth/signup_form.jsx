import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer'

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
    this.props.processSignup(user);
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
        <div className="auth-main-container">
          <div className="auth-left">
            <div className="auth-left-sub">
              <div className="auth-form-main-head">
                <h3>Sign Up for Yawp</h3>
                <span className="auth-form-main-head-sub-text">Connect with great local businesses</span>
                <span className="auth-form-main-head-sub-sub-text">By signing up, you agree to absolutely nothing!</span>
              </div>
              <div className="auth-form-container">
                <form onSubmit={this.handleSubmit} className="auth-form-box">
                  <div className="login-form">
                    <section className="username-section">
                      <input type="text"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.update('first_name')}
                        required
                      />
                      <input type="text"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.update('last_name')}
                        required
                      />
                    </section>
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
                    <input type="text"
                      placeholder="Zip Code"
                      value={this.state.zip_code}
                      onChange={this.update('zip_code')}
                      className='login-input'
                      required
                    />
                    <input className="auth-submit" type="submit" value="Sign Up" />
                      <div className='demo-user-swap-auth'>
                        <div className='demo-user' onClick={this.props.demoLogin}>Demo User</div>
                        <div className="swap-auth">Already on Yawp? <Link to="/login" className="small-link">Log in</Link></div>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <img src='/auth_image.png' />
        </div>
        <div className="main-footer-container">
          <Footer className="footer-container" />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
