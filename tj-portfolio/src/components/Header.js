function Header() {
  return (
    <div className="sticky top-0 z-50 bg-slate-300 flex items-center p-3 lg:px-6 shadow-md">
      {/* Flex row */}
      <div className="bg-blue-500 flex items-center">
        {/* Logo - Left */}left
      </div>
      <div className="bg-red-500 flex justify-center flex-grow">
        {/* Navigation - Center */}center
      </div>
      <div className="bg-green-500 flex items-center">
        {/* Profile Links - Right */}right
      </div>
    </div>
  );
}

export default Header;
