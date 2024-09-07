import { useEffect, useState } from "react";

const useGetVideos = (APIURL,dependency=null)=>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function getVideos() {
          const response = await fetch(APIURL);
          const data = await response.json();
          setVideos(data?.items)
        }
        getVideos()
      }, [dependency])

      return { videos }
}

export default useGetVideos;