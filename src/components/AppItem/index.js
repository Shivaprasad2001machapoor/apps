// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl, category} = appsList

  return (
    <li>
      <div>
        <image src={imageUrl} alt={appName} />
        <p className="application">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
