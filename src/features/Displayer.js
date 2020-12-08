export class Displayer {
  constructor(opts) {
    this.options = Object.assign({ color: '#333' }, opts);
  }
  flush(msg) {
    console.log(msg);
  }
}
