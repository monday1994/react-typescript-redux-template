/*
export const APP_VERSION = process.env.REACT_APP_APPLICATION_EKS_VERSION;
export const APP_VERSION_CREATION_DATE = process.env.REACT_APP_BUILD_DATE;
*/

let mainApi = '';
let authCallbackUrl = '';
let environmentName = '';

const domain = window.location.origin;

let cdseDomain = domain;

if(domain.includes('localhost')) {
    const localTestDomain = 'https://app.domain.com';
    mainApi = localTestDomain + '/api/content';
    authCallbackUrl = 'http://localhost:3001';
    cdseDomain = localTestDomain;
    environmentName = 'local';
} else if (domain.includes('dev')) {
    mainApi = cdseDomain + '/api/content';
    authCallbackUrl = cdseDomain;
    environmentName = 'dev';
} else if (domain.includes('test')) {
    mainApi = cdseDomain + '/api/content';
    authCallbackUrl = cdseDomain;
    environmentName = 'test';
} else if (domain.includes('support')) {
    mainApi = cdseDomain + '/api/content';
    authCallbackUrl = cdseDomain;
    environmentName = 'support';
}

export const MAIN_API_SERVICE_URL = mainApi;
export const AUTH_CALLBACK_URL = authCallbackUrl;
export const ENVIRONMENT_NAME = environmentName;

// APP URLS
export const DASHBOARD_SCREEN_URL = '/';

//SCREENS NAMES
export const DASHBOARD_SCREEN_NAME = 'DASHBOARD';

//timouts
export const SEARCH_TIMEOUT = 300;
