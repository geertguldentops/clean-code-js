function request(method, baseUrl, url, headers, urlParams, requestBody, timeout) {
    // Super exciting code here.
}

// Example usage:
request('GET', 'http://localhost:8080/my-awsome-app/api/', 'products/');
request('GET', 'http://localhost:8080/my-awsome-app/api/', 'products/', undefined, {id: 1});
request('POST', 'http://localhost:8080/my-awsome-app/api/', 'products/', undefined, undefined, {id: 1});

// Oops! Wrong! Should have called with requestBody being {id : 1} !
request('POST', 'http://localhost:8080/my-awsome-app/api/', 'products/', undefined, {id: 1});
