
interface INavigationProfilProps {
    countFavorite: number;
}

export const NavigationProfil = ({ countFavorite }: INavigationProfilProps) => {
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full border-2 border-primary">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-70 p-2 shadow"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li>
                    <a className="justify-between">
                        Favoris{" "}
                        {countFavorite > 99 ? "(99+)" : `(${countFavorite})`}
                        <span className="badge">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="red"
                                viewBox="0 0 24 24"
                                strokeWidth="0"
                                stroke="currentColor"
                                className="size-[1.2em]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                            </svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
}
