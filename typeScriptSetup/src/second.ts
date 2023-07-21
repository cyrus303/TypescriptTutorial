interface Photo {
  zoom: boolean;
  camera: string;
  brust: number;
}
interface Story {
  timeLimit: number;
  resolution: string;
  loadStory(): void;
}

class instagram implements Photo, Story {
  constructor(
    public zoom: boolean,
    public camera: string,
    public brust: number,
    public timeLimit: number,
    public resolution: string
  ) {}

  loadStory(): void {
    console.log('stories loaded');
  }
}
