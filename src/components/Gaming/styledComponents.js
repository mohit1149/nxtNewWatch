import styled from 'styled-components'

export const GamingMainBgContainer = styled.div`
  display: flex;
`
export const GamingTestingContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const GamingBgContainer = styled.div`
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
  color: #000000;
  font-family: 'Roboto';
  margin-left: 30px;
`

export const TrendingMainBgContainer = styled.div`
  display: flex;
`

export const TrendingBgContainer = styled.div`
  background-color: #e2e8f0;
  height: 500vh;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 50px;
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
export const TrendingUnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
