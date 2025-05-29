const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Daily Contents. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;