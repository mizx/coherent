import { EventEmitter } from 'events';
import { Deferred } from './deferred';

export const isAttached = window.engine !== undefined;

export class CoherentEvent extends EventEmitter {

  public trigger(name: string, ...args: any[]) {
    this.emit(name, ...args);
  }

  public call<T>(name: string, ...args: any[]) {
    return new Deferred<T>();
  }

}
