import 'lib-flexible';

export function patchRoutes({ routes }) {
  console.log(routes, 555);
}
export function onRouteChange({ location, routes, action }) {
  console.log(location, 222);
}
