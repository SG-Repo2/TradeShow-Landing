import { NavigateFunction } from 'react-router-dom';

export function navigateToRoute(navigate: NavigateFunction, route: string) {
  return () => navigate(route);
}

export function navigateExternal(url: string) {
  return () => { window.location.href = url; };
}