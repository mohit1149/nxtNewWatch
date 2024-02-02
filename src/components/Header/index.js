import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import CartContext from '../../context/cartContext'
import './index.css'
import {
  HeaderBgContainer,
  HeaderLogoImage,
  HeaderButtonContainer,
  HeaderEmojiButton,
  HeaderLogoutButton,
  HeaderProfileImage,
  HeaderPopButtonContainer,
  HeaderLogoutParagraph,
  HeaderConfirmButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {onChangeTheme, isDarkTheme} = value
        const onClickChangeTheme = () => {
          onChangeTheme()
        }
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <HeaderBgContainer bgColor={bgColor}>
            <Link to="/">
              <HeaderLogoImage src={websiteLogo} alt="website logo" />
            </Link>
            <HeaderButtonContainer>
              <HeaderEmojiButton
                type="button"
                data-testid="theme"
                onClick={onClickChangeTheme}
                color={textColor}
              >
                {isDarkTheme ? <FiSun size="20" /> : <FaMoon size="20" />}.
              </HeaderEmojiButton>
              <HeaderProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <HeaderLogoutButton type="button">Logout</HeaderLogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <>
                    <HeaderLogoutParagraph>
                      Are you sure, you want to logout
                    </HeaderLogoutParagraph>
                    <HeaderPopButtonContainer>
                      <HeaderLogoutButton type="button" onClick={() => close()}>
                        Cancel
                      </HeaderLogoutButton>

                      <HeaderConfirmButton
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </HeaderConfirmButton>
                    </HeaderPopButtonContainer>
                  </>
                )}
              </Popup>
            </HeaderButtonContainer>
          </HeaderBgContainer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
