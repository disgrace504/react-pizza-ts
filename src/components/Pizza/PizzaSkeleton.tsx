import ContentLoader from 'react-content-loader'

export const PizzaSkeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox='0 0 280 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <circle cx='124' cy='124' r='124' />
    <rect x='0' y='287' rx='10' ry='10' width='250' height='24' />
    <rect x='0' y='328' rx='10' ry='10' width='250' height='65' />
    <rect x='0' y='416' rx='10' ry='10' width='89' height='27' />
    <rect x='100' y='408' rx='20' ry='20' width='150' height='40' />
  </ContentLoader>
)
