import Image from "next/image"
import Search from "@/assets/search.svg"

export default function Topbar() {
    return (
        <div className="container w-full px-4 py-2 flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl py-4 font-bold text-primary-color font-heading">Weebstore</h2>
            <div className="bg-slate-200 px-4 py-2 rounded-md flex items-center gap-x-2">
                <Image src={Search} alt="magnifier" width={25} height={25}/>
                <input type="text" placeholder="Cari" className="bg-transparent outline-none "/>
            </div>
        </div>
    )
}