import { Router } from "express";
//import * as videosCtrl from "./videosController";
import videosController from "./videosController";

class VideosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    public config(): void {
        this.router.get("/videos", videosController.getVideos);
        this.router.get("/videos/:id", videosController.getVideo);
        this.router.post("/videos", videosController.createVideo);
        this.router.delete("/videos/:id", videosController.deleteVideo);
        this.router.put("/videos/:id", videosController.updateVideo);
    }
}

const videosRoutes = new VideosRoutes();

export default videosRoutes.router;

/*
const router = Router();

router.get("/videos", videosCtrl.getVideos);

router.get("/videos/:id", videosCtrl.getVideo);

router.post("/videos", videosCtrl.createVideo);

router.delete("/videos/:id", videosCtrl.deleteVideo);

router.put("/videos/:id", videosCtrl.updateVideo);

export default router;
*/