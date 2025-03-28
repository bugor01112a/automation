/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type objectsPage = typeof import('./pages/objects.js');
type autorisationPage = typeof import('./pages/registration.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, objectsPage: objectsPage, }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
