import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginMainBgContainer,
  LoginMainBgCard,
  LoginInput,
  LoginInputCheckBox,
  LoginWebSiteImageContainer,
  LoginButton,
  LoginLabel,
  LoginWebSiteImage,
  LoginCheckBoxContainer,
  LoginErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMessage: false,
    isCheckedPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowHidePassword = () => {
    this.setState(prev => ({
      isCheckedPassword: !prev.isCheckedPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onSubmitFormButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showErrorMessage,
      isCheckedPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainBgContainer>
        <LoginMainBgCard onSubmit={this.onSubmitFormButton}>
          <LoginWebSiteImageContainer>
            <LoginWebSiteImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </LoginWebSiteImageContainer>
          <LoginLabel htmlFor="username">USERNAME</LoginLabel>
          <LoginInput
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={this.onChangeUserName}
          />
          <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
          <LoginInput
            type={isCheckedPassword ? 'text' : 'password'}
            placeholder="Password"
            id="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <LoginCheckBoxContainer>
            <LoginInputCheckBox
              type="checkbox"
              checked={isCheckedPassword}
              onChange={this.onShowHidePassword}
              id="hide-password"
            />
            <LoginLabel htmlFor="hide-password">Show Password</LoginLabel>
          </LoginCheckBoxContainer>
          <LoginButton type="submit"> Login</LoginButton>
          {showErrorMessage && (
            <LoginErrorMessage>*{errorMsg}</LoginErrorMessage>
          )}
        </LoginMainBgCard>
      </LoginMainBgContainer>
    )
  }
}
export default Login
