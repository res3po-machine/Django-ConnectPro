const Footer: React.FC = () => {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ConnectPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
