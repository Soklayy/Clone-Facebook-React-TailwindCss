import { Link } from "react-router-dom";

export default function RightBar() {
    return (
        <>
            <div className="flex justify-between items-center">
                <p className="font-bold text-fourth_color">Manage Pages and profiles</p>
                <Link className="py-2 px-3 rounded-full hover:bg-fourth_color"><i className="fa-solid fa-ellipsis"></i></Link>
            </div>
            <Link className="py-3 px-2 hover:bg-fourth_color rounded-lg flex items-center">
                <i className="fa-regular fa-circle-user text-3xl mr-2"></i>
                User
            </Link>
            <Link className="py-3 px-2 hover:bg-fourth_color rounded-lg flex items-center ">
                <i class="fa-solid fa-chart-simple  text-3xl mr-2 text-[blue]"></i> Ads Manager
            </Link>
            <Link className="py-3 px-2 hover:bg-fourth_color rounded-lg flex items-center ">
                <i className="fa-solid fa-headset  text-3xl mr-2"></i> Ad center
            </Link>
            <Link className="py-3 px-2 hover:bg-fourth_color rounded-lg flex items-center">
                <i className="fa-brands fa-meta  text-3xl mr-2 text-[blue]"></i> Meta Business suite
            </Link>
        </>
    )
}