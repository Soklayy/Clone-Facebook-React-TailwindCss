import Header from "../component/Header";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";
import Story from "../component/Story";
import MakePost from "../component/MakePost";
import Content from "../component/Content";

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex bg-[#EAEFF2] h-full pt-20 justify-center">
                <div className="hidden lg:flex h-[88%] w-[25%] flex-col pl-3 font-bold overflow-y-scroll left-bar fixed left-0">
                    <LeftBar />
                    <LeftBar />
                </div>
                <main className="lg:w-[50%] lg:px-10 space-y-3 w-full">
                    <Story />
                    <MakePost />
                    <Content />
                    <Content />
                    <Content />
                </main>
                <div className="hidden lg:block w-[25%] pr-3 fixed right-0">
                    <RightBar />
                </div>
            </div>
        </>
    )
}