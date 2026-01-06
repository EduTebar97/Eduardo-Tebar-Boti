import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'bg-primary/5 text-primary'
      : 'text-gray-600 hover:bg-gray-50';
  };

  return (
    <aside className="border-r border-gray-200 bg-white hidden w-64 flex-col justify-between md:flex z-10">
      <div>
        {/* Logo Area */}
        <div className="flex h-16 items-center border-b border-gray-100 px-6">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-2xl">
              admin_panel_settings
            </span>
            <span className="text-lg font-bold tracking-tight">
              Admin Console
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive(
              '/'
            )}`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link
            to="/posts"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive(
              '/posts'
            )}`}
          >
            <span className="material-symbols-outlined">article</span>
            Todos los Posts
          </Link>
          <Link
            to="/categories"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive(
              '/categories'
            )}`}
          >
            <span className="material-symbols-outlined">folder_open</span>
            Categorías
          </Link>
          <Link
            to="/media"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive(
              '/media'
            )}`}
          >
            <span className="material-symbols-outlined">image</span>
            Media Library
          </Link>
        </nav>
      </div>

      {/* User Profile */}
      <div className="border-t border-gray-100 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-left transition-colors hover:bg-gray-50"
          type="button"
        >
          <div className="flex bg-primary/10 text-primary size-8 items-center justify-center rounded-full text-xs font-bold">
            Dr
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              Dr. Profile
            </p>
            <p className="truncate text-xs text-gray-500">
              admin@drprofile.com
            </p>
          </div>
          <span className="material-symbols-outlined text-gray-400">
            logout
          </span>
        </button>
      </div>
    </aside>
  );
};
