import Link from "next/link"
import HomeIcon from "./svg/home"
import TrendingIcon from "./svg/trending"
import CartIcon from "./svg/cart"
import AccountIcon from "./svg/account"
import { useState } from "react"

export default function Botnav() {
    const [active, setActive] = useState(0)

    return (
        <div className="container w-full fixed bottom-0 py-8 flex justify-center items-center">
            <div className="flex items-center w-max gap-x-20 text-xl font-normal">
                <div onClick={() => setActive(0)}>
                    <Link href='/' className='p-4 flex flex-col items-center'>
                        <HomeIcon width={35} height={35} classes={`${active !== 0 ? 'fill-slate-300' : 'fill-primary-color'}`} />
                        <p className={`${active === 0 ? 'text-primary-color' : 'text-slate-400'}`}>Home</p>
                    </Link>
                </div>
                <div onClick={() => setActive(1)}>
                    <Link href='/trending' className='p-4 flex flex-col items-center'>
                        <TrendingIcon width={35} height={35} classes={`${active !== 1 ? 'fill-slate-300' : 'fill-primary-color'}`} />
                        <p className={`${active === 1 ? 'text-primary-color' : 'text-slate-400'}`}>Trending</p>
                    </Link>
                </div>
                <div onClick={() => setActive(2)}>
                    <Link href='/cart' className='p-4 flex flex-col items-center'>
                        <CartIcon width={35} height={35} classes={`${active !== 2 ? 'fill-slate-300' : 'fill-primary-color'}`} />
                        <p className={`${active === 2 ? 'text-primary-color' : 'text-slate-400'}`}>Cart</p>
                    </Link>
                </div>
                <div onClick={() => setActive(3)}>
                    <Link href='/account' className='p-4 flex flex-col items-center'>
                        <AccountIcon width={35} height={35} classes={`${active !== 3 ? 'stroke-slate-300' : 'stroke-primary-color'}`} />
                        <p className={`${active === 3 ? 'text-primary-color' : 'text-slate-400'}`}>Account</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}