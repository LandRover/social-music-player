import Event from '../utils/event';
import Initialize from './initialize';
import BaseSingleton from '../base/base_singleton';
import {SYSTEM_EVENTS} from '../events/events';
import _ from '../utils/__';

let CONFIG_DEFAULTS = {
    el: '#social-music-player',

    loop: false,
    volume: 100,
    fadeoutTime: 2, // seconds

    fullscreen: true,

    width: '640px',
    height: '480px',

    logLevel: 'DEBUG'
};


/**
 *
 */
class Config extends BaseSingleton {
    static CLASS = 'Config';

    _defaultSet = false;

    /**
     *
     */
    init(settings) {
        this.logger.debug('Config create fired');

        // init defaults only once.
        if (!this._defaultSet) {
            _.merge(this, CONFIG_DEFAULTS);
            this._defaultSet = true;
        }

        // modify config data
        _.merge(this, settings);
    }
}

export default Config;