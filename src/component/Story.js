import heroo from "../assets/logo192.png"
import hero from "../assets/hero.jpg"

export default function Story() {
    return (
        <div className="overflow-auto flex flex-1 story">
            <div className="flex space-x-4">
                <div className="flex justify-center items-center relative w-[150px] h-[250px] bg-fourth_color rounded-lg">
                    <div className="w-10 h-10 bg-[black] rounded-full border-[3px] border-[blue] absolute z-10 top-2 left-3 justify-center flex items-center overflow-hidden">
                        <img src={heroo} className="w-full" />
                    </div>
                    <img src={heroo} className="blur-[2px]" />
                    <p className=" absolute bottom-1 left-3 font-bold text-[white]">Soklay</p>
                </div>
                <div className="flex justify-center items-center relative w-[150px] h-[250px] bg-fourth_color rounded-lg">
                    <div className="w-10 h-10 bg-[red] rounded-full border-[3px] border-[blue] absolute z-10 top-2 left-3 justify-center flex items-center overflow-hidden">

                        <img src={hero} className="w-full" />
                    </div>
                    <img src={hero} className="blur-[2px]" />
                    <p className=" absolute bottom-1 left-3 font-bold text-[white]">Soklay</p>
                </div>
                <div className="flex justify-center items-center relative w-[150px] h-[250px] bg-fourth_color rounded-lg">
                    <div className="w-10 h-10 bg-[red] rounded-full border-[3px] border-[blue] absolute z-10 top-2 left-3 justify-center flex items-center overflow-hidden">

                        <img src={hero} className="w-full" />
                    </div>
                    <img src={hero} className="blur-[2px]" />
                    <p className=" absolute bottom-1 left-3 font-bold text-[white]">Soklay</p>
                </div>
                <div className="flex justify-center items-center relative w-[150px] h-[250px] bg-fourth_color rounded-lg">
                    <div className="w-10 h-10 bg-[red] rounded-full border-[3px] border-[blue] absolute z-10 top-2 left-3 justify-center flex items-center overflow-hidden">

                        <img src={hero} className="w-full" />
                    </div>
                    <img src={hero} className="blur-[2px]" />
                    <p className=" absolute bottom-1 left-3 font-bold text-[white]">Soklay</p>
                </div>
                <div className="flex justify-center items-center relative w-[150px] h-[250px] bg-fourth_color rounded-lg">
                    <div className="w-10 h-10 bg-[red] rounded-full border-[3px] border-[blue] absolute z-10 top-2 left-3 justify-center flex items-center overflow-hidden">

                        <img src={hero} className="w-full" />
                    </div>
                    <img src={hero} className="blur-[2px]" />
                    <p className=" absolute bottom-1 left-3 font-bold text-[white]">Soklay</p>
                </div>
            </div>
        </div>
    )
}