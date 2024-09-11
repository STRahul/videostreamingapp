import { useSelector } from "react-redux"
import useGetData from "../hooks/useGetData"
import { SEACHAPIURL } from "../utils/constant"
import { Link, useSearchParams } from "react-router-dom"
import SearchVideoCard from "./SearchVideoCard"

const SearchContainer = () => {
  const [searchParams] = useSearchParams()
  const params = searchParams?.get('search_param')
  const { data: videos } = useGetData(SEACHAPIURL + params, params)

  return (
    <div className="mx-10">
      {
        videos?.map(video =>
          <Link key={video?.id?.videoId} to={'/watch?v='+video?.id?.videoId}>
            <SearchVideoCard video={video} />
          </Link>
        )
      }
    </div>
  )
}

export default SearchContainer
