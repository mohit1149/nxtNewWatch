import styled from 'styled-components'

export const SideBarBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  padding-left: 30px;
  margin-right: 25px;
`

export const SideBarUpperContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const SideBarButton = styled.p`
  background-color: transparent;
  border: none;
  margin-left: 14px;
  font-size: 17px;
  color: ${props => props.color};
`

export const SideBarIconContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${props => props.isActive};
`
export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideBarHeading = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 20px;
`

export const SideBarParagraph = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  line-height: 1.5;
`

export const SideFaceBookContainer = styled.div`
  display: flex;
`

export const SideImage = styled.img`
  margin-right: 20px;
  height: 30px;
  width: 30px;
`
