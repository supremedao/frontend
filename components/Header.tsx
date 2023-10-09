export const Header = () => {
  return (
    <header className="w-full">
      <nav>
        <ul className="flex items-center justify-between ml-5 mb-3">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 px-3 py-1 border text-2xl  border-white rounded-3xl font-light bg-transparent"
              target="_blank"
              href="/"
              rel="noopener noreferrer"
            >
              SupremeDAO
            </a>
          </li>
          <li className="flex flex-row">
            {/* <a
              className="pointer-events-none flex place-items-center gap-2 p-8"
              target="_blank"
              href=""
              rel="noopener noreferrer"
            >
              STAKE
            </a>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8"
              target="_blank"
              href=""
              rel="noopener noreferrer"
            >
              ABOUT
            </a> */}
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8"
              target="_blank"
              href=""
              rel="noopener noreferrer"
            >
              Connect Wallet
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
