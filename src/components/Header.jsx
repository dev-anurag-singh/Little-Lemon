import Nav from './Nav';

function Header() {
  return (
    <header className='py-4 flex justify-between items-center container'>
      <img src='./Logo.svg' alt='Brand Logo' />
      <Nav />
    </header>
  );
}

export default Header;
