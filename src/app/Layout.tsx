import { Outlet } from "react-router-dom";
import { Header } from "../widgets/header";
import { Toaster } from "@/shared/components/ui/sonner"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="flex justify-center py-7">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Toaster />
            <footer className="p-3 flex flex-col items-center gap-3 text-lg">
                <p>alpha 0.3.3</p>
                <p>by <a className="text-amber-100" href="https://t.me/silentias">silentias</a></p>
            </footer>
        </>
    )
}

export default Layout;