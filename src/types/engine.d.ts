// https://coherent-labs.com/Documentation/cpp-gt/d9/d19/javascript.html
interface Engine {
  on: (eventName: string, handler: (...args: any[]) => void) => void;
  off: (eventName: string, handler: (...args: any[]) => void) => void;
  trigger: (eventName: string, ...args: any[]) => void;
  call: (functionName: string, ...args: any[]) => void;
  isAttached: boolean;
}
