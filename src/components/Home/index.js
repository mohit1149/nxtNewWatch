import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import CartContext from '../../context/cartContext'
import HomeItem from '../HomeItem'
import {
  HomeMainBgContainer,
  HomeBgContainer,
  BannerBgContainer,
  ImageButtonBannerContainer,
  BannerLogoImage,
  BannerParagraph,
  BannerButton,
  BannerCloseButton,
  MainBgSearchContainer,
  SearchBar,
  SearchIconButton,
  MainBgBottomContainer,
  FailureViewBgContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewParagraph,
  FailureViewButton,
  LoaderContainer,
  GamingTestingContainer,
  HomeUnOrderList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    BannerButtonActive: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchValue: '',
    videoData: [],
  }

  componentDidMount() {
    this.getVideoData()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    viewCount: data.view_count,
    publishedAt: data.published_at,
  })

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getVideoData)
  }

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getVideoData)
    }
  }

  getVideoData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onclickBannerCloseButton = () => {
    this.setState({BannerButtonActive: false})
  }

  getFailureData = () => {
    this.setState({searchValue: ''}, this.getVideoData)
  }

  renderVideosFailureView = () => (
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
      <FailureViewButton type="button" onClick={this.getFailureData}>
        Retry
      </FailureViewButton>
    </FailureViewBgContainer>
  )

  renderVideosProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {videoData} = this.state

    return (
      <>
        {videoData.length > 0 ? (
          <HomeUnOrderList>
            {videoData.map(eachVideoData => (
              <HomeItem key={eachVideoData.id} eachVideoData={eachVideoData} />
            ))}
          </HomeUnOrderList>
        ) : (
          <FailureViewBgContainer>
            <FailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureViewHeading>No Search results found</FailureViewHeading>
            <FailureViewParagraph>
              Try different key words or remove search filter
            </FailureViewParagraph>
            <FailureViewButton type="button" onClick={this.getVideoData}>
              Retry
            </FailureViewButton>
          </FailureViewBgContainer>
        )}
      </>
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderVideosProgressView()
      default:
        return null
    }
  }

  render() {
    const {BannerButtonActive, searchInput} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <GamingTestingContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeMainBgContainer>
                <SideBar />
                <HomeBgContainer>
                  {BannerButtonActive && (
                    <BannerBgContainer data-testid="banner">
                      <ImageButtonBannerContainer>
                        <BannerLogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerParagraph>
                          Buy Nxt Watch Premium prepaid plans with <br />
                          UPI
                        </BannerParagraph>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </ImageButtonBannerContainer>
                      <BannerCloseButton
                        type="button"
                        onClick={this.onclickBannerCloseButton}
                        data-testid="close"
                      >
                        <MdClose size="25" />.
                      </BannerCloseButton>
                    </BannerBgContainer>
                  )}
                  <MainBgBottomContainer>
                    <MainBgSearchContainer>
                      <SearchBar
                        type="Search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onEnterClickSearch}
                      />
                      <SearchIconButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                      >
                        <IoMdSearch size="25" />
                      </SearchIconButton>
                    </MainBgSearchContainer>
                    {this.renderVideoDetails()}
                  </MainBgBottomContainer>
                </HomeBgContainer>
              </HomeMainBgContainer>
            </GamingTestingContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Home
