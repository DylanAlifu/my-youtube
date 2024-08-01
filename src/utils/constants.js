const YOUTUBE_API_KEY = "AIzaSyC3NkMZOa1gWyVy40Wak3jtmoLYwlzk0ok";
const YOUTUBE_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${YOUTUBE_API_KEY}`;

  const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export { YOUTUBE_API, YOUTUBE_SEARCH_API };
