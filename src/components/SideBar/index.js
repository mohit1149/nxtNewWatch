import {IoMdHome} from 'react-icons/io'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {
  SideBarBgContainer,
  SideBarUpperContainer,
  SideBarBottomContainer,
  SideBarButton,
  SideBarIconContainer,
  SideBarParagraph,
  SideBarHeading,
  SideFaceBookContainer,
  SideImage,
} from './styledComponents'
import CartContext from '../../context/cartContext'

const SideBar = () => (
  <CartContext.Consumer>
    {value => {
      const {activeTabItem, activeTab, isDarkTheme} = value
      const onClickHomeTabItem = () => {
        activeTabItem('HOME')
      }
      const onClickTrendingTabItem = () => {
        activeTabItem('TRENDING')
      }
      const onClickGamingTabItem = () => {
        activeTabItem('GAMING')
      }
      const onClickSavedVideosTabItem = () => {
        activeTabItem('SAVED VIDEOS')
      }

      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      return (
        <SideBarBgContainer>
          <SideBarUpperContainer>
            <Link to="/">
              <SideBarIconContainer
                isActive={activeTab === 'HOME' ? '#ffffff' : 'transparent'}
                onClick={onClickHomeTabItem}
                key="home"
              >
                <IoMdHome size="20" />
                <SideBarButton
                  color={activeTab === 'HOME' ? ' #ff0000' : {textColor}}
                >
                  Home
                </SideBarButton>
              </SideBarIconContainer>
            </Link>
            <Link to="/trending">
              <SideBarIconContainer
                isActive={activeTab === 'TRENDING' ? '#ffffff' : 'transparent'}
                onClick={onClickTrendingTabItem}
                key="trending"
              >
                <FaFireAlt size="20" />
                <SideBarButton
                  color={activeTab === 'TRENDING' ? ' #ff0000' : {textColor}}
                >
                  Trending
                </SideBarButton>
              </SideBarIconContainer>
            </Link>
            <Link to="/gaming">
              <SideBarIconContainer
                isActive={activeTab === 'GAMING' ? '#ffffff' : 'transparent'}
                onClick={onClickGamingTabItem}
                key="gaming"
              >
                <SiYoutubegaming size="20" />
                <SideBarButton
                  color={activeTab === 'GAMING' ? ' #ff0000' : {textColor}}
                >
                  Gaming
                </SideBarButton>
              </SideBarIconContainer>
            </Link>
            <Link to="/saved-videos">
              <SideBarIconContainer
                isActive={
                  activeTab === 'SAVED VIDEOS' ? '#ffffff' : 'transparent'
                }
                onClick={onClickSavedVideosTabItem}
                key="savedVideo"
              >
                <BiListPlus size="20" />

                <SideBarButton
                  color={
                    activeTab === 'SAVED VIDEOS' ? ' #ff0000' : {textColor}
                  }
                >
                  Saved videos
                </SideBarButton>
              </SideBarIconContainer>
            </Link>
          </SideBarUpperContainer>
          <SideBarBottomContainer>
            <SideBarHeading>CONTACT US</SideBarHeading>
            <SideFaceBookContainer>
              <SideImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SideImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SideImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SideFaceBookContainer>
            <SideBarParagraph>
              Enjoy! Now to see your channels and recommendations!
            </SideBarParagraph>
          </SideBarBottomContainer>
        </SideBarBgContainer>
      )
    }}
  </CartContext.Consumer>
)

export default SideBar
