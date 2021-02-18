import Raven from 'raven-js';

const sentry_key = 'f799c89128ff492a9bb12727dc170625'//'cb55d4f05cd443ce82303222f77ef5e0';
const sentry_app = '5643518' //'61499';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
