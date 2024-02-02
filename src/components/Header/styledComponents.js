import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const HeaderLogoImage = styled.img`
  width: 13vw;
  height: 5vh;
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderEmojiButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 15px;
  color: ${props => props.color};
`

export const HeaderLogoutButton = styled.button`
  color: #4f46e5;
  background-color: transparent;
  padding: 10px;
  border: 1px solid #4f46e5;
  border-radius: 8px;
  font-family: 'Roboto';
`
export const HeaderProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`
export const HeaderConfirmButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  font-family: 'Roboto';
  border: none;
`

export const HeaderLogoutParagraph = styled.p`
font-family: 'Roboto';
color: ; #475569
`
export const HeaderPopButtonContainer = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogoDemoButton = styled.button`
  border: none;
  background-color: transparent;
`
