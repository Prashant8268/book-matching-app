const NavBar = () => {
  return (
    <nav className="bg-indigo-600 py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide px-4">Book Matcher</h1>
        <ul className="flex space-x-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
