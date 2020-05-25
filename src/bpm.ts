import { getCompotion } from "./util";

export class BPM {
  constructor(
    private comp: CompItem,
    private bpm = 120,
    private offset = 0,
    private count = 4
  ) {}

  setBPM(bpm: number) {
    this.bpm = bpm;
  }
  setFrame(frame: number) {
    const frameRate = this.comp.frameRate;
    this.bpm = (60 * frameRate) / frame;
  }
  setOffset(offset: number) {
    this.offset = offset;
  }
  setComposition(comp: CompItem) {
    this.comp = comp;
  }
  setCount(count: number) {
    this.count = count;
  }
  getBPM(): number {
    return this.bpm;
  }
  getFrame(): number {
    const frameRate = this.comp.frameRate;
    return (60 * frameRate) / this.bpm;
  }
  getOffset(): number {
    return this.offset;
  }
  getCount(): number {
    return this.count;
  }
  private getComposition(): CompItem {
    return this.comp;
  }

  execute() {
    const comp = this.getComposition();
    const offset = this.getOffset();
    const frame = this.getFrame();
    const duration = comp.duration;
    const frameRate = comp.frameRate;
    const nullLayer = comp.layers.addNull();
    nullLayer.name = "BPM";

    const maxCount = ((duration - offset) * this.getBPM()) / 60;

    for (let i = 0; i <= maxCount; ++i) {
      nullLayer.marker.setValueAtTime((offset + i * frame) / frameRate, new MarkerValue(`${i % this.count}`));
    }
  }
}
