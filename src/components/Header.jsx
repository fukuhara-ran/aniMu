import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div className='Navbar'>
        <Nav fill variant='tabs'>
        <Nav.Item>
            <Nav.Link eventKey="newAnime">Anime terbaru</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="genre">Genre</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="community">Komunitas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="help">Help</Nav.Link>
        </Nav.Item>
        </Nav>
    </div>
  )
}

export default Header