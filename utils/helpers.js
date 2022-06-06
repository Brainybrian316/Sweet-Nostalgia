module.exports = {
  // format_url is a method that takes in a url and returns a string in a shortened url format
  format_url: url => {
    return url
    .replace('http://', '') // remove http://
    .replace('https://', '') // remove https://
    .replace('www.', '') // remove www.
    .split('/')[0] // get the first part of the url
    .split('?')[0]; // get the first part of the url after the ?
},
  active_sub: (activesub, value) => {
    return  activesub === value
  }
};