function get(baseUrl, url, config) {
    let {headers, urlParams, timeout} = config;

    // Super exciting code here.
}

function post(baseUrl, url, config) {
    let {headers, requestBody, timeout} = config;

    // Super exciting code here.
}

// Example usage:
get('http://localhost:8080/my-awsome-app/api/', 'products/');
get('http://localhost:8080/my-awsome-app/api/', 'products/', {urlParams: {id: 1}});
post('http://localhost:8080/my-awsome-app/api/', 'products/', {requestBody: {id: 1}});

// Oops! Wrong! Should have called with {requestBody: {id: 1}} ! Should fail rather obviously in post function though!
post('http://localhost:8080/my-awsome-app/api/', 'products/', {urlParams: {id: 1}});
