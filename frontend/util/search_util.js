import { getCookie, setCookie } from './cookies';

export const countSpecialChars = (str) => {
  let counts = {'?': 0, '=': 0, '&': 0}
  for (let i = 0; i < str.length; i++){
    if (str[i] === '?'){
      counts['?'] += 1;
    } else if (str[i] === '='){
      counts['='] += 1;
    } else if (str[i] === '&'){
      counts['&'] += 1;
    }
  }
  return counts;
};

export const isValidSearchString = (searchStr) => {
  const counts = countSpecialChars(searchStr);
  return (
    searchStr[0] === "?" &&
    counts['?'] === 1 &&
    counts['&']+1 === counts['='] &&
    /[\?&]query=/.test(searchStr) &&
    /[\?&]lat=/.test(searchStr) &&
    /[\?&]lon=/.test(searchStr) &&
    /[\?&]loc=/.test(searchStr) &&
    searchStr.split('&').length === counts['=']
  )
};

export const parseSearchString = (searchStr) => {
  const searchArr = searchStr.substring(1).split('&');
  let searchObj = {}
  searchArr.forEach (el => {
    searchObj[el.split('=')[0]] = decodeURIComponent(el.split('=')[1]);
  });
  return searchObj;
};

export const getUserLocation = () => {
  let userLocationObj = { lat: "", lon: "", loc: "" };
  if (!getCookie("loc")){
    userLocationObj.lat = window.userData.latitude;
    userLocationObj.lon = window.userData.longitude;
    userLocationObj.loc = `${window.userData.city}, ${window.userData.region_name}`;
    setCookie("lat", userLocationObj.lat);
    setCookie("lon", userLocationObj.lon);
    setCookie("loc", userLocationObj.loc);
  } else {
    userLocationObj.lat = parseFloat(getCookie("lat"));
    userLocationObj.lon = parseFloat(getCookie("lon"));
    userLocationObj.loc = getCookie("loc");
  }
  return userLocationObj;
};


export const convertToHistoryOptions = (searchParamsObj) => {
  searchParamsObj = (searchParamsObj.filters) ? searchParamsObj : Object.assign(searchParamsObj, {filters: ""})
  return(
    {
      pathname: '/search',
      search: `?query=${encodeURIComponent(searchParamsObj.query)}&lat=${encodeURIComponent(searchParamsObj.lat)}&lon=${encodeURIComponent(searchParamsObj.lon)}&loc=${encodeURIComponent(searchParamsObj.loc)}&filters=${encodeURIComponent(searchParamsObj.filters)}`
    }
);
}

export const getSearchFromURL = () => {
  let searchStr = location.hash;
  let counter = searchStr.length;
  while (searchStr[0] !== '?' && counter > 0){
    searchStr = searchStr.substring(1);
    counter--;
  }
  return searchStr;
}
