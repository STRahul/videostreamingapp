import useGetData from "../hooks/useGetData";
import { CHANNEL_INFO_API, VIDEO_DETAILS_API } from "../utils/constant";
import { formatDate, formatNumber } from "../utils/utils";

const SearchVideoCard = ({video}) => {
    const { channelTitle, description, publishedAt, thumbnails, title, channelId} = video?.snippet;
    const {data: channelInfo} = useGetData(CHANNEL_INFO_API+"&id="+channelId,channelId)
    const {data: videoDetails} = useGetData(VIDEO_DETAILS_API+"&id="+video?.id?.videoId,video?.id?.videoId)
    const viewCount = videoDetails[0]?.statistics?.viewCount
    const channelIcon = channelInfo[0]?.snippet?.thumbnails?.medium?.url
  return (
    <div className="flex gap-10 px-9 py-5">
      <div>
        <img className="rounded-lg h-[250px]" src={thumbnails?.medium?.url} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <div>
            <h1 className="font-medium text-lg">{title}</h1>
        </div>
        <div className="flex gap-1 text-sm">
            <span>{formatNumber(viewCount)}</span>
            <p>•</p>
            <span>{formatDate(publishedAt)}</span>
        </div>
        <div className="flex gap-2 py-1">
            <img className="h-8 w-8 rounded-full" src={channelIcon} alt="" />
            <span className="text-sm">{channelTitle}</span>
        </div>
        <div>
            <p className="w-[90%] text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchVideoCard
