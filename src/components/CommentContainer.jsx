import useGetData from "../hooks/useGetData"
import { COMMENTS_API_URL } from "../utils/constant"
import CommentList from "./CommentList"

const CommentContainer = ({ videoId }) => {
  const { data: commentData } = useGetData(COMMENTS_API_URL + '&videoId=' + videoId)

  return (
    <div>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer
