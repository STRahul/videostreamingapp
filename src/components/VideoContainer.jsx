import VideoCard from "./VideoCard"
import { APIURL } from "../utils/constant";
import useGetVideos from "../hooks/useGetVideos";
const VideoContainer = () => {
 const { videos } = useGetVideos(APIURL);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
    {
      videos?.map(video =>
       <VideoCard key={video.id} video={video}/>
      )
    }
  </div>
  )
}

export default VideoContainer
