import { useState } from "react";
import { useEffect } from "react";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;
const APIURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=' + key;
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    async function getVideos() {
      const response = await fetch(APIURL);
      const data = await response.json();
      setVideos(data?.items)
    }
    getVideos()
  }, [])
  return (
    <div className="flex flex-wrap">
      {
        videos?.map(video =>
          <div key={video?.id} className="flex flex-col gap-5 p-2 m-2">
            <div>
              <img src={video?.snippet?.thumbnails?.medium?.url} />
            </div>
            <div className="flex gap-5">
              <div>
                <img className="h-12" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
              </div>
              <div>
                <div>
                  <h1>{video?.snippet?.title}</h1>
                </div>
                <div>
                  <h2>{video?.snippet?.channelTitle}</h2>
                </div>
                <div>
                  <div>
                    <h2>{video?.snippet?.statistics?.viewCount}</h2>
                  </div>
                  <div>
                    <h2>{video?.snippet?.publishedAt}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
