import styled from 'styled-components'

export const HomeMainBgContainer = styled.div`
  display: flex;
`

export const HomeBgContainer = styled.div`
  background-color: #e2e8f0;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  height: 40vh;
  padding-left: 40px;
`

export const BannerLogoImage = styled.img`
  width: 13vw;
  height: 5vh;
  margin-bottom: 15px;
`
export const BannerParagraph = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  margin-bottom: 15px;
`

export const BannerButton = styled.button`
  border: 1px solid #1e293b;
  font-family: 'Roboto';
  padding: 10px;
  background-color: transparent;
  color: #1e293b;
`
export const ImageButtonBannerContainer = styled.div``
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
`
export const MainBgBottomContainer = styled.div`
  padding: 20px;
`
export const MainBgSearchContainer = styled.div`
  display: flex;
`
export const SearchBar = styled.input`
  height: 7vh;
  width: 30vw;
  border: 1px solid #94a3b8;
  padding-left: 12px;
  background-color: #ffffff;
`
export const SearchIconButton = styled.button`
  background-color: #f1f5f9;
  border: 1px solid #94a3b8;
`
export const FailureViewBgContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewImage = styled.img`
  height: 40vh;
  width: 50vh;
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  text-align: center;
`
export const GamingTestingContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const FailureViewParagraph = styled.p`
  font-family: 'Roboto';
  color: #475569;
  text-align: center;
`
export const FailureViewButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border: none;
  border-radius: 9px;
  padding: 10px;
`
export const LoaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeUnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
