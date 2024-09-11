import { useSearchParams } from "react-router-dom"
import VideoContainer from "./VideoContainer"
import WatchVideoDetails from "./WatchVideoDetails"

const WatchVideo = () => {
    const [searchParams] = useSearchParams()
    const v = searchParams.get('v')
    return (
        <div className="flex w-full gap-6">
            <div className="w-[70%] pl-6">
                <div className="rounded-lg py-5">
                    <iframe
                        width="800px"
                        height="500px"
                        className="aspect-video rounded-lg w-full"
                        src={"https://www.youtube.com/embed/" + v + "?si=OQgS5SnpiT-2BHUQ&autoplay=1&mute=0"}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen="1"
                    />
                </div>
                <WatchVideoDetails videoId={v} />
            </div>
            <div className="w-[30%] px-6 py-2">
                <VideoContainer />
            </div>
        </div>

    )
}

export default WatchVideo
