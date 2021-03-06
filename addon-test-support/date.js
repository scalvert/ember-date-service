import DateService from 'ember-date-service/services/date';

/**
 * @class FakeDateService
 *
 * Extends the provided internal DateService, allowing you to override
 * Date.now() and Date.UTC() without modifying the native Date object.
 */
export default class FakeDateService extends DateService {
  constructor() {
    super(...arguments);

    this._now = null;
  }

  now() {
    if (this._now) {
      return this._now;
    }

    return super.now(...arguments);
  }

  setNow(date = Date.now()) {
    this._now = date instanceof Date ? date.getTime() : date;

    return this._now;
  }

  reset() {
    this._now = null;
  }
}
