import { useSelector } from "react-redux"
import useGetData from "../hooks/useGetData"
import { SEACHAPIURL } from "../utils/constant"
import { useSearchParams } from "react-router-dom"
import SearchVideoCard from "./SearchVideoCard"

const SearchContainer = () => {
    const [searchParams] = useSearchParams()
    const params = searchParams?.get('search_param')
    const {data:videos} =  useGetData(SEACHAPIURL+params,params)

  return (
    <div className="mx-10">
      {
        videos?.map(video => 
          <SearchVideoCard key={video?.id?.videoId} video={video} />
        )
      }
    </div>
  )
}

export default SearchContainer
