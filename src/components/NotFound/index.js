import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/cartContext'
import {
  NotFoundMainBgContainer,
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const bgColors = isDarkTheme ? '#f9f9f9' : '#181818'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundMainBgContainer color={bgColor}>
            <SideBar />

            <NotFoundBgContainer>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundHeading color={bgColors}>Page Not Found</NotFoundHeading>
              <NotFoundParagraph color={bgColors}>
                We are sorry, the page you requested could not be found.
              </NotFoundParagraph>
            </NotFoundBgContainer>
          </NotFoundMainBgContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default NotFound
