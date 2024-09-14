import { formatDate } from "../utils/utils";

const CommentList = ({ comment }) => {
    console.log(comment)
    const snippet = comment?.snippet?.topLevelComment?.snippet;

    return (
        <div className="flex mx-10 my-8 gap-4">
            <img className="h-10 w-10 rounded-full my-2" src={snippet?.authorProfileImageUrl} alt="" />
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <h1 className="font-medium">{snippet?.authorDisplayName}</h1>
                    <span className="text-sm opacity-95">{formatDate(snippet?.publishedAt)}</span>
                </div>
                <p className="opacity-95">{snippet?.textOriginal}</p>
            </div>

        </div>
    )
}

export default CommentList
