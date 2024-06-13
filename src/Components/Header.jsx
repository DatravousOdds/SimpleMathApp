const Header = ({ title }) => {
  const headerStyles = {
    padding: "1rem",
  }
  return (
    
    <>
      <h1 style={headerStyles}>{title}</h1>
    </>
  );
};

export default Header;
