import { useEffect, useState } from "react";

const useGetData = (APIURL,dependency=null)=>{
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        async function getVideos() {
          const response = await fetch(APIURL);
          const data = await response.json();
          setResponseData(data?.items)
        }
        getVideos()
      }, [dependency])

      return { data: responseData }
}

export default useGetData;