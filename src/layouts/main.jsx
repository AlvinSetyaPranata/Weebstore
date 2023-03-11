import Botnav from "@/components/Botnav"
import Topbar from "@/components/Topbar"

export default function MainLayout({children}) {
    console.log(children)

    return (
        <div className="container md:w-full m-auto h-screen">
            <Topbar />
            {children}
            <Botnav />
        </div>
    )
}