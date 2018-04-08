import ReactGA from 'react-ga';
ReactGA.initialize('UA-77395473-1');

exports.onRouteUpdate = (state, page, pages) => {
  if ( state.location.search.includes('isAdmin') ) {
    window.localStorage.setItem('isAmdin', 'true');
  }
  if (process.env.NODE_ENV === 'production' && !window.localStorage.getItem('isAmdin')) {
    ReactGA.pageview(state.location.pathname);
  } 
};