import { Link } from "react-router-dom";

const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-slate-600 w-full flex flex-col">
      <header className="bg-white shadow w-full">
        <div className="w-full px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">{title}</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600 hover:underline">
              User
            </Link>
            <Link to="/admin" className="text-blue-600 hover:underline">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full px-8 py-6">
        <div className="w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;