function formatMessage(message) {
  return `[Service-2] ${message}`;
}

function log(message) {
  console.log(formatMessage(message));
}

module.exports = {
  formatMessage,
  log
};

