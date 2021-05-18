/****************************************/
import axios from "axios";
import { Video } from "./Video";
/****************************************/

class VideoService {

    private API: any = process.env.REACT_APP_API;

    public async getVideos() {
        /******************* VARIABLES *******************/
        let response: any, videos: Video[];
        /*************************************************/
        response = await axios.get(`${this.API}/videos`);
        videos = response.data.body.data;
        return(videos);
    };

    public async getVideoById(id: string) {
        /******************* VARIABLES *******************/
        let response: any, video: Video;
        /*************************************************/
        response = await axios.get(`${this.API}/videos/${id}`);
        video = response.data.body.data;
        return(video);
    };

    public async createNewVideo(video: Video) {
        return(await axios.post(`${this.API}/videos`, video));
    };

    public async deleteVideoById(id: string) {
        return(await axios.delete(`${this.API}/videos/${id}`));
    };

    public async updateVideo(id: string, video: Video) {
        return(await axios.put(`${this.API}/videos/${id}`, video));
    };
    
};

const videoService = new VideoService();

export default videoService;

/*
const API = process.env.REACT_APP_API;

export const getVideos = async () => {
    return(await axios.get<Video[]>(`${API}/videos`));
};

export const getVideoById = async (id: string) => {
    return(await axios.get<Video>(`${API}/videos/${id}`));
};

export const createNewVideo = async (video: Video) => {
    return(await axios.post(`${API}/videos`, video));
};

export const deleteVideoById = async (id: string) => {
    return(await axios.delete(`${API}/videos/${id}`));
};

export const updateVideo = async (id: string, video: Video) => {
    return(await axios.put(`${API}/videos/${id}`, video));
};
*/