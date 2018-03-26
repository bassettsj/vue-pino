import Pino from 'pino';

let level: string = 'warn';

if ('localStorage' in window) {
  const storeValue = localStorage.getItem('LOG_LEVEL');
  if (typeof storeValue === 'string') {
    level = storeValue;
  }
}

export default Pino({
  level,
  name: 'vue-pino',
  browser: {
    transmit: {
      level: 'warn',
      send: function (level, logEvent) {
        if (level === 'warn') {
          // maybe send the logEvent to a separate endpoint
          // or maybe analyse the messages further before sending
        }
        // we could also use the `logEvent.level.value` property to determine
        // numerical value
        if (logEvent.level.value >= 50) { // covers error and fatal

          // send the logEvent somewhere
        }
      }
    }
  }
});
