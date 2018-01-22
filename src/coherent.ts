import { EventEmitter } from 'events';
import { Deferred } from './deferred';

export const isAttached = window.engine !== undefined;

export class Coherent extends EventEmitter {

  // public trigger(name: string, ...args: any[]) {
  //   this.emit(name, ...args);
  // }

  public call<T>(name: string, ...args: any[]) {
    return new Deferred<T>();
  }

}

const coherent = new Coherent();

const engine = window.engine = window.engine || {};

engine.isAttached = isAttached;
engine.on = coherent.on;
engine.off = coherent.removeListener;
engine.call = coherent.call;
engine.trigger = coherent.emit;
