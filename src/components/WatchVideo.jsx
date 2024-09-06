import { useSearchParams } from "react-router-dom"

const WatchVideo = () => {
    const [searchParams] = useSearchParams()
    const v = searchParams.get('v')
    return (
        <div className="rounded-lg aspect-video w-[1000px] h-[560px]">
            <iframe
                className="aspect-video rounded-lg w-full"
                src={"https://www.youtube.com/embed/" + v}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen="1"
            />
        </div>

    )
}

export default WatchVideo
