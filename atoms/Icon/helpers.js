const ICONS_ASSETS_PATH = '/icons'

const iconMap = {
  rightArrow: 'right-arrow.svg',
}

export const mapIcon = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}`
export const mapSize = () => null // TODO: Implement this
