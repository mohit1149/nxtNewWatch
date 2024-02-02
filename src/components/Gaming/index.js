import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/cartContext'
import GamingItem from '../GamingItem'
import {
  GamingMainBgContainer,
  GamingBgContainer,
  FailureViewBgContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewParagraph,
  FailureViewButton,
  LoaderContainer,
  TrendingUnOrderList,
  TrendingMainHeadingBgContainer,
  TrendingMainHeading,
  GamingTestingContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    trendingData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,

    viewCount: data.view_count,
  })

  getTrendingData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideos =>
        this.getFormattedData(eachVideos),
      )
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

  renderTrendingView = () => {
    const {trendingData} = this.state

    return (
      <>
        <TrendingMainHeadingBgContainer>
          <SiYoutubegaming size="40" />
          <TrendingMainHeading>Gaming</TrendingMainHeading>
        </TrendingMainHeadingBgContainer>
        <TrendingUnOrderList>
          {trendingData.map(eachVideoData => (
            <GamingItem key={eachVideoData.id} eachVideoData={eachVideoData} />
          ))}
        </TrendingUnOrderList>
      </>
    )
  }

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
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <GamingTestingContainer data-testid="gaming" bgColor={bgColor}>
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
export default Gaming
