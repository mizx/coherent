export class Deferred <T> extends Promise<T> {
  private resolveRef: (value?: T | PromiseLike<T> | undefined) => void;
  private rejectRef: (reason?: any) => void;

  constructor() {
    super((resolve, reject) => {
      this.resolveRef = resolve;
      this.rejectRef = reject;
    });
  }

  public resolve(value?: T | PromiseLike<T> | undefined) {
    this.resolveRef(value);
  }

  public reject(reason?: any) {
    this.rejectRef(reason);
  }
}
