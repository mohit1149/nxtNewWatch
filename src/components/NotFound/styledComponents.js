import styled from 'styled-components'

export const NotFoundMainBgContainer = styled.div`
  display: flex;
`

export const NotFoundBgContainer = styled.div`
  background-color: ${prev => prev.color};
  height: 500vh;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 60vh;
  width: 30vw;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  color: #1e293b;
  color: ${prev => prev.color};
`

export const NotFoundParagraph = styled.p`
  font-family: 'Roboto';
  text-align: center;
  color: #475569;
  color: ${prev => prev.color};
`
