import './styles.css'

function Header({ me }) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">ContaiJS</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
