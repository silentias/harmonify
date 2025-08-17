import { ToggleTheme } from "./toggle-theme"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full p-5 bg-black">
            <div className="container">
                <div className="flex justify-between gap-3 items-center text-white">
                    <div className="italic font-bold text-2xl">
                        Harmonify
                    </div>
                    <nav className="flex gap-4">
                        <Link className="font-semibold" to="/chord">Подбор аккордов</Link>
                    </nav>
                    <ToggleTheme />
                </div>
            </div>
        </header>
    )
}