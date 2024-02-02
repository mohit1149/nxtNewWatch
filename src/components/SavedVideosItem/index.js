import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  TrendingItemBgContainer,
  TrendingItemImage,
  TrendingItemInnerContainer,
  TrendingItemHeading,
  TrendingItemParagraph,
  TrendingItemParagraphContainer,
  TrendingItemDataParagraph,
} from './styledComponents'

const SavedVideosItem = props => {
  const {eachVideoData} = props
  const {title, thumbnailUrl, name, viewCount, publishedAt, id} = eachVideoData
  const updatedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`}>
      <TrendingItemBgContainer>
        <TrendingItemImage src={thumbnailUrl} alt="video thumbnail" />
        <TrendingItemInnerContainer>
          <TrendingItemHeading>{title}</TrendingItemHeading>
          <TrendingItemParagraph>{name}</TrendingItemParagraph>
          <TrendingItemParagraphContainer>
            <TrendingItemParagraph>{viewCount} views</TrendingItemParagraph>
            <TrendingItemDataParagraph>{updatedDate}</TrendingItemDataParagraph>
          </TrendingItemParagraphContainer>
        </TrendingItemInnerContainer>
      </TrendingItemBgContainer>
    </Link>
  )
}

export default SavedVideosItem
