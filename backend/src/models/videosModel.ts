/**
 * @name VideosModel
 * @description Videos model
 */
export interface video {
    url?: string;
    title?: string;
    description?: string;
}

/**
 * @name VideosModel
 * @description Videos model
 */
export class VideosModel implements video {

    url;
    title;
    description;

    constructor(video: video) {
        this.url = video.url;
        this.title = video.url;
        this.description = video.url;
    }
}