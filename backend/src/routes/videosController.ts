import { Request, Response, RequestHandler } from "express";
import { video, VideosModel } from "../models/videosModel";
import { JSON_RESPONSE } from "../config/settings";
import Video from "./Video";


/**
 * @name VideoController
 * @description videos controller class
 */
class VideoController {

    /**
     * @name createVideo
     * @description Method to create video
     * @param {Request} req - req data
     * @param {Response} res - res data
     * @returns {Promise}
     */
    public async createVideo(req: Request, res: Response) : Promise<any> {
        /******************* VARIABLES *******************/
        let response: any, video: video, videoFound: any, newVideo: any, savedVideo: any;
        /*************************************************/
        try {
            video = new VideosModel(req.body);
            videoFound = await Video.findOne({ url: video.url });
            if (videoFound) {
                response = JSON_RESPONSE.BAD_REQUEST;
                response.body.description = "The url already exists";
                response.body.data = videoFound;
            } else {
                newVideo = new Video(req.body);
                savedVideo = await newVideo.save();
                response = JSON_RESPONSE.SUCCESS;
                response.body.description = "Video has been created";
                response.body.data = savedVideo;
            }
        } catch (error) {
            response = JSON_RESPONSE.INTERNAL_SERVER_ERROR;
            response.body.description = error;
        }
        return(res.status(response.statusCode).json(response));
    }

    /**
     * @name getVideos
     * @description Method to get videos
     * @param {Request} req - req data
     * @param {Response} res - res data
     * @returns {Promise}
     */
    public async getVideos(req: Request, res: Response) : Promise<any> {
        /******************* VARIABLES *******************/
        let response: any, videosFound: any;
        /*************************************************/
        try {
            videosFound = await Video.find();
            response = JSON_RESPONSE.SUCCESS;
            response.body.description = "Videos has been consulted";
            response.body.data = videosFound;
        } catch (error) {
            response = JSON_RESPONSE.INTERNAL_SERVER_ERROR;
            response.body.description = error;
        }
        return(res.status(response.statusCode).json(response));
    }

    /**
     * @name getVideo
     * @description Method to get video
     * @param {Request} req - req data
     * @param {Response} res - res data
     * @returns {Promise}
     */
    public async getVideo(req: Request, res: Response) : Promise<any> {
        /******************* VARIABLES *******************/
        let response: any, videoFound: any;
        /*************************************************/
        try {
            videoFound = await Video.findById(req.params.id);
            if (videoFound) {
                response = JSON_RESPONSE.SUCCESS;
                response.body.description = "Video has been consulted";
                response.body.data = videoFound;
            } else {
                response = JSON_RESPONSE.BAD_REQUEST;
                response.body.description = "This id does not exist";
                response.body.data = { _id: req.params.id };
            }
        } catch (error) {
            response = JSON_RESPONSE.INTERNAL_SERVER_ERROR;
            response.body.description = error;
        }
        return(res.status(response.statusCode).json(response));
    }

    /**
     * @name deleteVideo
     * @description Method to delete video
     * @param {Request} req - req data
     * @param {Response} res - res data
     * @returns {Promise}
     */
    public async deleteVideo(req: Request, res: Response) : Promise<any> {
        /******************* VARIABLES *******************/
        let response: any, videoFound: any;
        /*************************************************/
        try {
            videoFound = await Video.findByIdAndDelete(req.params.id);
            if (videoFound) {
                response = JSON_RESPONSE.SUCCESS;
                response.body.description = "Video has been deleted";
                response.body.data = videoFound;
            } else {
                response = JSON_RESPONSE.BAD_REQUEST;
                response.body.description = "This id does not exist";
                response.body.data = { _id: req.params.id };
            }
        } catch (error) {
            response = JSON_RESPONSE.INTERNAL_SERVER_ERROR;
            response.body.description = error;
        }
        return(res.status(response.statusCode).json(response));
    }

    /**
     * @name updateVideo
     * @description Method to update video
     * @param {Request} req - req data
     * @param {Response} res - res data
     * @returns {Promise}
     */
    public async updateVideo(req: Request, res: Response) : Promise<any> {
        /******************* VARIABLES *******************/
        let response: any, videoUpdated: any;
        /*************************************************/
        try {
            videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (videoUpdated) {
                response = JSON_RESPONSE.SUCCESS;
                response.body.description = "Video has been updated";
                response.body.data = videoUpdated;
            } else {
                response = JSON_RESPONSE.BAD_REQUEST;
                response.body.description = "This id does not exist";
                response.body.data = { _id: req.params.id };
            }
        } catch (error) {
            response = JSON_RESPONSE.INTERNAL_SERVER_ERROR;
            response.body.description = error;
        }
        return(res.status(response.statusCode).json(response));
    }
    
}

const videoController = new VideoController();

export default videoController;

/*
export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound) {
        return res.status(303).json({ message: "the url already exists" });
    }
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error);
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) {
        return res.status(204).json();
    }
    return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) {
        return res.status(204).json();
    }
    return res.json(videoFound);
};

export const updateVideo: RequestHandler = async (req, res): Promise<Response> => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!videoUpdated) {
        return res.status(204).json();
    }
    return res.json(videoUpdated);
};
*/