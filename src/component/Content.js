import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import heroo from "../assets/logo192.png";


export default function Content() {

    return (
        <div className="w-full flex flex-col p-5 bg-[white] rounded-lg border border-fourth_color space-y-4">
            <div className="flex justify-between">
                <div className="flex space-x-2" >
                    <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden">
                        <img src={heroo} />
                    </div>
                    <div>
                        <div className="space-x-1 font-bold">
                            <Link>Soklay</Link>
                            <span>•</span>
                            <Link className="text-[blue]">Follow</Link>
                        </div>
                        <p>12 hours ago</p>
                    </div>
                </div>
                <div className="flex">
                    <Link className="flex w-[2rem] items-center justify-center h-[2rem] rounded-full hover:bg-fourth_color">
                        <i className="fa-solid fa-ellipsis"></i>
                    </Link>
                    <div className="hover:cursor-pointer flex w-[2rem] items-center justify-center h-[2rem] rounded-full hover:bg-fourth_color">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
            <p className="w-full">
                តោះៗមេឃត្រជាក់ៗឃ្លានទេហ្វេនៗ? មកនេះមកបេីករាល់ថ្ងៃតាស៎ 😋 មីមួយចានប្រហិតបំពងមួយចានភេសជ្ជៈមួយកែវរួចមួយពេល 🍜🍨🍹
                🥘 សេវាកម្មដឹកជញ្ជូនមានដូចជា: FOODPANDA, WOW-NOW, NHAM24, BLOC, E-Gets, GrabFood, GoodToGo និង Wing Mall 🛵
            </p>
            <div className="w-full">
                <img src={heroo} className="w-full animate-spin" />
            </div>
            <div className="flex justify-between pb-1 border-b-2">
                <p className="text-xl"><i className="fa-solid fa-thumbs-up text-[blue] "></i> 100</p>
                <div className="flex space-x-3">
                    <p className="hover:underline hover:cursor-pointer">Comment</p>
                    <p className="hover:underline hover:cursor-pointer">Share</p>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <p className="text-xl hover:cursor-pointer flex-auto text-center rounded-lg hover:bg-fourth_color py-1 hover:text-[white]">
                    <i className="fa-solid fa-thumbs-up"></i> Like
                </p>
                <p className="text-xl hover:cursor-pointer flex-auto text-center rounded-lg hover:bg-fourth_color py-1 hover:text-[white]">
                    <i className="fa-solid fa-comment"></i> Comment
                </p>
                <p className="text-xl hover:cursor-pointer flex-auto text-center rounded-lg hover:bg-fourth_color py-1 hover:text-[white]">
                    <i className="fa-solid fa-share"></i> Share
                </p>
            </div>
        </div>
    )
}