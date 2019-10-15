import moment from 'moment';

exports.getUrlParameter = (url, key) => {
  const replacedKey = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${replacedKey}=([^&#]*)`);
  const results = regex.exec(url);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

exports.formatTime = (momentTime) => {
  if (momentTime) {
    return moment(momentTime).format('DD MMM YYYY');
  }
};
