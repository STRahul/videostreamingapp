import { FaNewspaper } from "react-icons/fa6";
import { IoMdMusicalNote } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;
export const APIURL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=' + key;

export const SEACHAPIURL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key=' + key + '&q=';
export const CHANNEL_INFO_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + key
export const VIDEO_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + key;

export const COMMENTS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key="+key+"&maxResults=100";

export const sidebarLinks = [
    {
        icons: IoMdHome,
        label: 'Home'
    },
    {
        icons: SiYoutubeshorts,
        label: 'Shorts',
        v: 1
    },
    {
        icons: IoMdMusicalNote,
        label: 'Music',
        v: 10
    },
    {
        icons: FaNewspaper,
        label: 'News',
        v: 25
    }
]