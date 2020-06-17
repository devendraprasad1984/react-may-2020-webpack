export const getFromWeb = function (raw, uri, resolve, reject) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        var data = JSON.parse(this.response);
        if (req.status >= 200 && req.status < 400) {
            let vals2display = raw ? data : '';
            resolve(vals2display);
        } else {
            req.onerror = reject(req.statusText);
        }
    }
    req.open('GET', uri, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.send();
}
export const Post2Web = function (uri, data, resolve, reject) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        var data = JSON.parse(this.response);
        if (req.status >= 200 && req.status < 400) {
            let vals2display = raw ? data : '';
            resolve(vals2display);
        } else {
            req.onerror = reject(req.statusText);
        }
    }
    req.open('POST', uri, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(data);
}

export const FetchFromAPIs = (url, callback) => {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => callback({error}));
}