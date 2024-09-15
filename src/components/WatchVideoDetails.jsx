import useGetData from "../hooks/useGetData"
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constant"
import { formatDate, formatNumber } from "../utils/utils"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { useState } from "react";

const WatchVideoDetails = ({videoId}) => {
    const [showMore, setShowMore] = useState(false);
    const {data: videoDetails} = useGetData(VIDEO_DETAILS_API+"&id="+ videoId, videoId)
    const videoData  = videoDetails[0]
    const {data: channelInfo} = useGetData(CHANNEL_INFO_API+"&id="+ videoData?.snippet?.channelId, videoData?.snippet?.channelId)
    const channelData = channelInfo?.[0]

    return (
    <div>
      <div>
        <h1 className="font-semibold text-lg">{videoData?.snippet?.title}</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
                <img className="h-9 w-9 rounded-full" src={channelData?.snippet?.thumbnails?.medium?.url} alt="" />
                <div className="flex flex-col">
                    <span className="font-semibold">{channelData?.snippet?.title}</span>
                    <span className="text-sm">{formatNumber(channelData?.statistics?.subscriberCount)} Subscribers</span>
                </div>
            </div>
            <div>
              <button className="border border-1 bg-black text-white py-1 px-4 rounded-full">Subscribe</button>
            </div>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <button className="flex items-center gap-2 border border-1 py-1 px-4 rounded-s-full bg-gray-300"><AiOutlineLike /> <span>{formatNumber(videoData?.statistics?.likeCount)}</span></button>
            <button className="border border-1 py-1 px-3 rounded-e-full bg-gray-300"><AiOutlineDislike /></button>
          </div>
          <div>
            <button className="flex items-center gap-2 border border-1 py-1 px-3 rounded-full bg-gray-300"><PiShareFatThin /><span>Share</span></button>
          </div>
          <div>
            <button className="flex items-center gap-2 border border-1 py-1 px-3 rounded-full bg-gray-300"><HiDownload /><span>Download</span></button>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 px-4 py-1 mt-5 rounded-lg">
        <div className="py-4 flex gap-2">
          <span>{formatNumber(videoData?.statistics?.viewCount)}</span>
          <span>|</span>
          <span>{formatDate(videoData?.snippet?.publishedAt)}</span>
        </div>
        <div className="pb-3">
          <p className={!showMore ? 'line-clamp-3': 'line-clamp-none'}>{videoData?.snippet?.description}</p>
          <div className="font-medium">
            {
              showMore? <button onClick={()=>setShowMore(false)}>Show less</button>:
              <button onClick={()=>setShowMore(true)}>...more</button>
            }
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="flex gap-2 items-center font-medium text-xl">
          <span>{formatNumber(videoData?.statistics?.commentCount)}</span>
          <span>Comments</span>
        </div>
      </div>
    </div>
  )
}

export default WatchVideoDetails
