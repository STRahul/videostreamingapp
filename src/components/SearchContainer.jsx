import { useSelector } from "react-redux"
import useGetVideos from "../hooks/useGetVideos"
import { SEACHAPIURL } from "../utils/constant"
import { useSearchParams } from "react-router-dom"

const SearchContainer = () => {
//    const userInput = useSelector(state => state.search.input);
    const [searchParams] = useSearchParams()
    const params = searchParams?.get('search_param')
    const {videos} =  useGetVideos(SEACHAPIURL+params,params)
    console.log(videos)

  return (
    <div>
      <h1>searh container</h1>
    </div>
  )
}

export default SearchContainer
