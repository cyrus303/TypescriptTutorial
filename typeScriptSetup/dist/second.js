"use strict";
class instagram {
    constructor(zoom, camera, brust, timeLimit, resolution) {
        this.zoom = zoom;
        this.camera = camera;
        this.brust = brust;
        this.timeLimit = timeLimit;
        this.resolution = resolution;
    }
    loadStory() {
        console.log('stories loaded');
    }
}
