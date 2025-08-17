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
        </>
    )
}

export default Layout;