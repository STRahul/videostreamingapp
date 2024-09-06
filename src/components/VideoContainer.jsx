import VideoCard from "./VideoCard"
import { APIURL } from "../utils/constant";
import useGetVideos from "../hooks/useGetVideos";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const { videos } = useGetVideos(APIURL);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {
        videos?.map(video =>
          <Link to={`/watch?v=${video.id}`}  key={video.id}>
            <VideoCard video={video} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer
