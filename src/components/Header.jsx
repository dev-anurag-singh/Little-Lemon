import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className='py-4 flex justify-between items-center container'>
        <img src='./Logo.svg' alt='Brand Logo' />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
