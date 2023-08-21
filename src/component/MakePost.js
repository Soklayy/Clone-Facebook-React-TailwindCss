import { Link } from "react-router-dom"
import hero from "../assets/logo192.png"

export default function MakePost() {

    return (
        <div className="w-full flex flex-col p-5 bg-[white] rounded-lg border border-fourth_color space-y-4">
            <div className="flex space-x-3">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden">
                    <img src={hero} />
                </div>
                <input className="outline-none bg-fourth_color px-3 rounded-full flex-auto text-[white]" type="text" placeholder="What is your mind ,Soklay?" />
            </div>
            <div className="flex justify-between border-t-[1px] pt-3 w-full">
                <Link className="flex item-center rounded-lg hover:bg-fourth_color py-2 flex-auto justify-center font-bold text-fourth_color hover:text-[white]"><i className="fa-solid fa-video text-[red] text-3xl mr-2"></i> Live video</Link>
                <Link className="flex item-center rounded-lg hover:bg-fourth_color py-2 flex-auto justify-center font-bold text-fourth_color hover:text-[white]"><i className="fa-regular fa-image text-3xl text-[green] mr-2"></i> Photo/video</Link>
                <Link className="flex item-center rounded-lg hover:bg-fourth_color py-2 flex-auto justify-center font-bold text-fourth_color hover:text-[white]"><i className="fa-brands fa-instagram text-3xl text-[pink] mr-2"></i>Reel</Link>
            </div>
        </div>
    )
}