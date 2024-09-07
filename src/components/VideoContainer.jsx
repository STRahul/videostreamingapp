import VideoCard from "./VideoCard"
import { APIURL } from "../utils/constant";
import useGetVideos from "../hooks/useGetVideos";
import { Link, useSearchParams } from "react-router-dom";
const VideoContainer = () => {
  const [searchParams] = useSearchParams()
  const v = searchParams.get('v')
  let url = APIURL;
  if(v!==null){
     url += '&videoCategoryId='+v
  }
  const { videos } = useGetVideos(url,v);
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
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
