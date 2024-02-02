import {FaFireAlt} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/cartContext'
import {
  SavedVideosMainBgContainer,
  SavedVideosBgContainer,
  TrendingMainHeadingBgContainer,
  TrendingMainHeading,
  FailureViewBgContainer,
  FailureViewHeading,
  FailureViewImage,
  FailureViewParagraph,
  TrendingUnOrderList,
  GamingTestingContainer,
} from './styledComponents'
import SavedVideosItem from '../SavedVideosItem'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#0f0f0f'
      return (
        <GamingTestingContainer data-testid="savedVideos" bgColor={bgColor}>
          <Header />
          <SavedVideosMainBgContainer>
            <SideBar />
            <SavedVideosBgContainer>
              <TrendingMainHeadingBgContainer>
                <FaFireAlt size="40" />
                <TrendingMainHeading textColor={textColor}>
                  Saved Videos
                </TrendingMainHeading>
              </TrendingMainHeadingBgContainer>
              {savedVideos.length > 0 ? (
                <TrendingUnOrderList>
                  {savedVideos.map(eachVideoData => (
                    <SavedVideosItem
                      key={eachVideoData.id}
                      eachVideoData={eachVideoData}
                    />
                  ))}
                </TrendingUnOrderList>
              ) : (
                <FailureViewBgContainer>
                  <FailureViewImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <FailureViewHeading textColor={textColor}>
                    No Saved videos found
                  </FailureViewHeading>
                  <FailureViewParagraph textColor={textColor}>
                    You can save your videos while watching them
                  </FailureViewParagraph>
                </FailureViewBgContainer>
              )}
            </SavedVideosBgContainer>
          </SavedVideosMainBgContainer>
        </GamingTestingContainer>
      )
    }}
  </CartContext.Consumer>
)
export default SavedVideos
