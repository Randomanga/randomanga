// You can add methods here like a generic Dto mapper,
// Sending Json responses
// Sending Ok responses...

export class BaseHttpController {
  constructor() {
    this.autoBindMethods();
  }

  // Because of the wrapper it's going to lose the This context.
  protected autoBindMethods() {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    methods
      .filter(method => method !== 'constructor')
      .forEach(method => {
        // @ts-ignore
        this[method] = this[method].bind(this);
      });
  }
}
