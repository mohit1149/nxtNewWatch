import {Link} from 'react-router-dom'
import {
  GamingTitleParagraph,
  GamingTitleViewPoint,
  GamingItemBgContainer,
  GamingItemImage,
} from './styledComponents'

const GamingItem = props => {
  const {eachVideoData} = props
  const {title, thumbnailUrl, viewCount, id} = eachVideoData

  return (
    <Link to={`/videos/${id}`}>
      <GamingItemBgContainer>
        <GamingItemImage src={thumbnailUrl} alt="video thumbnail" />
        <GamingTitleParagraph>{title}</GamingTitleParagraph>
        <GamingTitleViewPoint>
          {viewCount} Watching Worldwide
        </GamingTitleViewPoint>
      </GamingItemBgContainer>
    </Link>
  )
}

export default GamingItem
