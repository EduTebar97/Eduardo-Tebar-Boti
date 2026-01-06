interface HeaderProps {
  onNewPost: () => void;
}

export const Header = ({ onNewPost }: HeaderProps) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-900 md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="hidden text-xl font-bold text-gray-800 sm:block">
          Gestor de Contenidos
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onNewPost}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all active:scale-95 hover:bg-blue-700"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Nuevo Post
        </button>
      </div>
    </header>
  );
};
