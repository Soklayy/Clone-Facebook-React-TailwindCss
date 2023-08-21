import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className="p-3 flex w-full justify-between text-xl items-center fixed z-20 bg-[white] shadow">
            <div className="flex justify-center space-x-2">
                <Link className="w-[30px] h-[30px]"><i className="fa-brands fa-facebook text-[blue] text-4xl"></i></Link>
                <input className="px-5 py-1 rounded-full text-[black] outline-none bg-fourth_color " type="text" placeholder="search facebook" />
            </div>
            <nav className="">
                <Link className="hover:bg-fourth_color py-3 px-8 rounded-lg"><i className="fa-solid fa-house "></i></Link>
                <Link className="hover:bg-fourth_color py-3 px-8 rounded-lg"><i className="fa-solid fa-store"></i></Link>
                <Link className="hover:bg-fourth_color py-3 px-8 rounded-lg"><i className="fa-solid fa-user-group"></i></Link>
                <Link className="hover:bg-fourth_color py-3 px-8 rounded-lg"><i className="fa-solid fa-gamepad"></i></Link>
            </nav>
            <div className="space-x-1">
                <Link className=" bg-[#B9B7BD] rounded-full py-2 px-[.65rem] hover:bg-[#868B8E]"><i className="fa-solid fa-bars"></i></Link>
                <Link className=" bg-[#B9B7BD] rounded-full py-2 px-[.65rem] hover:bg-[#868B8E]"><i className="fa-brands fa-facebook-messenger"></i></Link>
                <Link className=" bg-[#B9B7BD] rounded-full py-2 px-[.65rem] hover:bg-[#868B8E]"><i className="fa-solid fa-bell"></i></Link>
                <Link className=" bg-[#B9B7BD] rounded-full py-2 px-[.65rem] hover:bg-[#868B8E]"><i className="fa-regular fa-circle-user"></i></Link>
            </div>
        </header>
    )

}