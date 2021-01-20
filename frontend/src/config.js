/* eslint-disable import/prefer-default-export */
export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000'
  : '';