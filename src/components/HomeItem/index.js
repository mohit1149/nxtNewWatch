import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  HomeItemMainImage,
  HomeItemBottomContainer,
  HomeItemSmallImage,
  HomeItemInnerContainer,
  HomeItemParagraph,
  HomeItemViewCountContainer,
  HomeItemBgContainer,
  HomeItemViewParagraph,
  HomeItemDateParagraph,
} from './styledComponents'

const HomeItem = props => {
  const {eachVideoData} = props
  const {
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
    id,
  } = eachVideoData
  const updatedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`}>
      <HomeItemBgContainer>
        <HomeItemMainImage src={thumbnailUrl} alt="video thumbnail" />
        <HomeItemBottomContainer>
          <HomeItemSmallImage src={profileImageUrl} alt="channel logo" />
          <HomeItemInnerContainer>
            <HomeItemParagraph>{title}</HomeItemParagraph>
            <HomeItemParagraph>{name}</HomeItemParagraph>
            <HomeItemViewCountContainer>
              <HomeItemViewParagraph>{viewCount} views</HomeItemViewParagraph>
              <HomeItemDateParagraph>{updatedDate}</HomeItemDateParagraph>
            </HomeItemViewCountContainer>
          </HomeItemInnerContainer>
        </HomeItemBottomContainer>
      </HomeItemBgContainer>
    </Link>
  )
}

export default HomeItem
