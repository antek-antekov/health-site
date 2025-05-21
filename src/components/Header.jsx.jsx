import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Как улучшить здоровье</h1>
        <nav className="space-x-6">
          <Link to="/">Главная</Link>
          <Link to="/articles">Статьи</Link>
          <Link to="/about">О сайте</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;