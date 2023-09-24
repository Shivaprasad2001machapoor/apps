// Write your code here
import './index.css'

const TabItem = props => {
  const {tabslist} = props
  const {displayText} = tabslist
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <p className="category">{displayText}</p>
      </div>
    </nav>
  )
}
export default TabItem
