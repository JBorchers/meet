import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';
import config from './config';

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

// This function takes the accessToken you found and checks whether it’s a valid token or not. If it’s not, then you follow the redirect logic and send the user to the Google Authorization screen.
export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    config.API_URL + 'token/' + encodeCode
  )
    .then((res) => {
      return res.json(); 
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

export const getEvents = async () => {
  NProgress.start();

  // uses mock data if using local host; otherwise, real api is used
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  // If it returns true (the user is online), the app will request data from the Google Calendar API;
  // If it returns false (the user is offline), the app will load the event list data stored in localStorage:
  if (!navigator.onLine) {
        const data = localStorage.getItem("lastEvents");
        NProgress.done();
        return data ? JSON.parse(data).events : [] ;
    }

  // only check for access token if user is online
  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = config.API_URL + 'get-events/' + token;
    const result = await axios.get(url);
    // list of events for future use
    if (result.data) {
      var locations = extractLocations(result.data.events);
      // localStorage can only store strings
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  // If no token is found (!accessToken), it then checks for an authorization code.
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    // If no authorization code is found (!code), the user is automatically redirected to the Google Authorization screen, where they can sign in and receive their code. 
    if (!code) {
      const results = await axios.get(
        config.API_URL + 'get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
}