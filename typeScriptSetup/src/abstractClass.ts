abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('color is grey');
  }
}

const SachinAbstract = new Instagram('brust', 'color', 10);
