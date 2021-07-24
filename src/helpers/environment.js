let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'aw-bh-jz-dndcreatorclient.herokuapp.com':
        APIURL = 'https://aw-bh-jz-dndcreator.herokuapp.com'
}

export default APIURL;