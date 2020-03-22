export const fetchWithError = (url, method, body, bodyMethods) => {
  return fetch(url, { 
    method: method, 
    headers: bodyMethods.includes(method) ? { 'Content-Type': 'application/json' } : {},
    body: bodyMethods.includes(method) ? body : null
  })
    .then(response => {
      if(response.ok)
        return response.json();
      throw `Response: ${response.status}`;
    });
};
