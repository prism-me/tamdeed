import React, { Component } from "react";
import Banner from "../sections/media/media-banner/MediaBanner";
import LatestUpdates from "../sections/media/latest-updates/LatestUpdates";
import News from "../sections/media/in-the-news/News"

class MediaCenter extends Component {
    render() {
        return (
            <div>
                <Banner />
                <LatestUpdates />
                <News />
            </div>
        );
    }
}

export default MediaCenter;