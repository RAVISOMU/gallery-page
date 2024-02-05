import './index.css'

const ThumbnailItem = props => {
  const {eachImage, getActiveId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onImageClick = () => {
    getActiveId(id)
  }

  const isActiveItem = isActive ? '' : 'active-image'

  return (
    <li className={`image-item ${isActiveItem}`}>
      <button type="button" className="button" onClick={onImageClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
