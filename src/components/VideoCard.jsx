import { formatDate, formatNumber } from "../utils/utils"

const VideoCard = ({video}) => {

  return (
    <div className="flex flex-col gap-5 p-2 m-2">
          <div>
            <img src={video?.snippet?.thumbnails?.medium?.url} />
          </div>
          <div className="flex gap-5">
            <div className="h-10 w-10 mt-2 rounded-full">
              <img className="object-contain" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
            <div>
              <div className=" p-1 font-bold line-clamp-2">
                <h1>{video?.snippet?.title}</h1>
              </div>
              <div>
                <h2>{video?.snippet?.channelTitle}</h2>
              </div>
              <div className="flex gap-1">
                <div>
                  <h2>{formatNumber(video?.statistics?.viewCount)}</h2>
                </div>
                <p>•</p>
                <div>
                  <h2>{formatDate(video?.snippet?.publishedAt)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default VideoCard
