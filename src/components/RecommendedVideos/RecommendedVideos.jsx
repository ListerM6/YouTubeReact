import React from "react";
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard.jsx';

function RecommendedVideos(){
    return(
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos"></div>
            <VideoCard 
                title="THE BATMAN - Main Trailer"
                views="33.3 Million"
                timestamp="1 month ago"
                channelImage="https://i.ytimg.com/an_webp/mqqft2x_Aa4/mqdefault_6s.webp?du=3000&sqp=CKK6tYwG&rs=AOn4CLDDV8m43H4nyN4I9uQwupreMNHSPA"
                channel="Warner Brothers Pictures"
                image="https://yt3.ggpht.com/ytc/AKedOLRF9_MOYUXfJ-8Bxknj0YSma7RNmZ6TU9jInnpxvg=s176-c-k-c0x00ffffff-no-rj"
            />
        </div>
    )
}

export default RecommendedVideos;

