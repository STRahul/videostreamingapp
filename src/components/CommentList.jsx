import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { formatDate, formatNumber } from "../utils/utils"

const CommentList = ({ comments, reply = false }) => {

    return (
        <div>
            {
                comments?.map(comment =>
                    <>
                        <div key={comment?.id}>
                            {
                                reply ?
                                   // for reply comment
                                    <Comment comment={comment} /> :
                                   // for simple comment
                                    <Comment comment={comment?.snippet?.topLevelComment} />
                            }
                        </div>
                        {
                            comment?.snippet?.totalReplyCount > 0 &&
                            <div className="ml-16">
                                <CommentList comments={comment?.replies?.comments} reply={true} />
                            </div>
                        }
                    </>
                )
            }
        </div>
    )
}

export default CommentList


const Comment = ({ comment }) => {
    const snippet = comment?.snippet;

    return (
        <div className="flex mx-10 my-8 gap-4">
            <img className="h-10 w-10 rounded-full my-2" src={snippet?.authorProfileImageUrl} alt="" />
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <h1 className="font-medium">{snippet?.authorDisplayName}</h1>
                    <span className="text-sm opacity-95">{formatDate(snippet?.publishedAt)}</span>
                </div>
                <p className="opacity-95">{snippet?.textOriginal}</p>
                <div className="flex items-center gap-4 py-1">
                    <button className="py-1"><AiOutlineLike /></button>
                    {snippet?.likeCount !== 0 && <span>{formatNumber(snippet?.likeCount)}</span>}
                    <button className="py-1"><AiOutlineDislike /></button>
                </div>
            </div>

        </div>
    )
}
