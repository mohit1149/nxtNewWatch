import styled from 'styled-components'

export const SavedVideosMainBgContainer = styled.div`
  display: flex;
`

export const GamingTestingContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const SavedVideosBgContainer = styled.div`
  background-color: #e2e8f0;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
export const TrendingMainHeadingBgContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 50px;
`
export const TrendingMainHeading = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  margin-left: 30px;
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
  color: ${props => props.textColor};
  text-align: center;
`

export const FailureViewParagraph = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor}
  text-align: center;
`
export const SavedVideosRenderContainer = styled.div``

export const TrendingUnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`
