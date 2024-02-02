import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/cartContext'
import {
  GamingMainBgContainer,
  GamingBgContainer,
  FailureViewBgContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewParagraph,
  FailureViewButton,
  LoaderContainer,
  VideoDetailsTitle,
  VideoDetailsViewParagraph,
  ViewCountAndDateContainer,
  LikeDisLikeSaveContainer,
  HorizontalLine,
  VideoBottomContainer,
  VideoProfileImage,
  VideoBottomRightContainer,
  ReactPlayerContainer,
  VideoItemDemoButton,
  GamingTestingContainer,
  VideoDetailsViewParagraph1,
  VideoItemDemoButton1,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    trendingData: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        videoUrl: fetchedData.video_details.video_url,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }

      this.setState({
        trendingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingView = () => (
    <CartContext.Consumer>
      {value => {
        const {trendingData, isVideoSaved, isLiked, isDisliked} = this.state

        const {
          id,
          title,
          viewCount,
          publishedAt,
          name,
          profileImageUrl,
          subscriberCount,
          description,
          videoUrl,
          videoSaved,
        } = trendingData
        const currentDate = formatDistanceToNow(new Date(publishedAt))
        const {addToSaveVideos, removeSaveVideos} = value

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...trendingData, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({
              isVideoSaved: !prev.isVideoSaved,
            }),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const likeClass = isLiked ? '#2563eb' : '#64748b'
        const dislikeClass = isDisliked ? '#2563eb' : '#64748b'

        const likeIcon = isLiked ? (
          <AiFillLike size="20" color="#2563eb" />
        ) : (
          <AiOutlineLike size="20" />
        )
        const dislikeIcon = isDisliked ? (
          <AiFillDislike size="20" color="#2563eb" />
        ) : (
          <AiOutlineDislike size="20" />
        )

        return (
          <>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} width="79vw" />
            </ReactPlayerContainer>
            <VideoDetailsTitle>{title}</VideoDetailsTitle>
            <LikeDisLikeSaveContainer>
              <ViewCountAndDateContainer>
                <VideoDetailsViewParagraph>
                  {viewCount} views
                </VideoDetailsViewParagraph>
                <VideoDetailsViewParagraph>
                  {currentDate}
                </VideoDetailsViewParagraph>
              </ViewCountAndDateContainer>

              <ViewCountAndDateContainer>
                <ViewCountAndDateContainer>
                  <VideoDetailsViewParagraph color={likeClass}>
                    {likeIcon}
                  </VideoDetailsViewParagraph>
                  <VideoItemDemoButton
                    type="button"
                    onClick={onClickLikeButton}
                    color={likeClass}
                  >
                    Like
                  </VideoItemDemoButton>
                </ViewCountAndDateContainer>
                <ViewCountAndDateContainer>
                  <VideoDetailsViewParagraph color={dislikeClass}>
                    {dislikeIcon}
                  </VideoDetailsViewParagraph>
                  <VideoItemDemoButton
                    type="button"
                    onClick={onClickDislikeButton}
                    color={dislikeClass}
                  >
                    Dislike
                  </VideoItemDemoButton>
                </ViewCountAndDateContainer>
                <ViewCountAndDateContainer>
                  <VideoItemDemoButton1
                    type="button"
                    onClick={saveVideoToList}
                    color={videoSaved ? '#2563eb' : '#181818'}
                  >
                    <RiPlayListAddFill size="20" />
                  </VideoItemDemoButton1>
                  <VideoDetailsViewParagraph1
                    color={videoSaved ? '#2563eb' : '#181818'}
                  >
                    {isVideoSaved ? 'Saved' : 'Save'}
                  </VideoDetailsViewParagraph1>
                </ViewCountAndDateContainer>
              </ViewCountAndDateContainer>
            </LikeDisLikeSaveContainer>
            <HorizontalLine />
            <VideoBottomContainer>
              <VideoProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoBottomRightContainer>
                <VideoDetailsViewParagraph>{name}</VideoDetailsViewParagraph>
                <VideoDetailsViewParagraph>
                  {subscriberCount} subscribers
                </VideoDetailsViewParagraph>
                <VideoDetailsTitle>{description}</VideoDetailsTitle>
              </VideoBottomRightContainer>
            </VideoBottomContainer>
          </>
        )
      }}
    </CartContext.Consumer>
  )

  renderTrendingFailureView = () => (
    <FailureViewBgContainer>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />

      <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
      <FailureViewParagraph>
        We are having some trouble to complete your request.
        <br /> Please try again.
      </FailureViewParagraph>
      <FailureViewButton type="button" onClick={this.getTrendingData}>
        Retry
      </FailureViewButton>
    </FailureViewBgContainer>
  )

  renderTrendingProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderTrendingProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'

          return (
            <GamingTestingContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <Header />
              <GamingMainBgContainer>
                <SideBar />
                <GamingBgContainer>
                  {this.renderTrendingDetails()}
                </GamingBgContainer>
              </GamingMainBgContainer>
            </GamingTestingContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default VideoItemDetails
