import { Link } from "react-router-dom";
import type { INavigationProfileCountProps } from "@interfaces/interfaces"


export const NavigationProfil = ({countFavorite}: INavigationProfileCountProps) => {

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 active:scale-95"
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
                    <Link to="/profile">
                        <span className="justify-between">Profile</span>
                        <span className="badge absolute">New</span>
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <span className="justify-between">
                            Favorites {countFavorite > 99 ? "(99+)" : `(${countFavorite})`}
                        </span>
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
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title btn min-h-0 h-11 bg-base-100 items-center outline-transparent justify-center outline-0">Logout</div>
                    <div className="collapse-content">
                        <ul className="menu menu-sm">
                            <li className="list-row my-0.5 text-white"><Link to="/auth/signin" style={{ marginInline: '10px' }}>SignIn</Link></li>
                            <li className="list-row my-0.5 text-white"><Link to="/auth/signup" style={{ marginInline: '10px' }}>SignUp</Link></li>
                        </ul>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
