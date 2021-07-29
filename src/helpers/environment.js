let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    // this is the deployed react application
    case 'adventurewaits.herokuapp.com':
        APIURL = 'https://aw-bh-jz-dndcreator.herokuapp.com'
}

export default APIURL;