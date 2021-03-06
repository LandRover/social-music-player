import BaseSingleton from '../base/base_singleton';
import _ from '../utils/__';

let CONFIG_DEFAULTS = {
    elID: '#social-music-player',

    loop: false,
    volume: 1,
    fadeoutTime: 2, // seconds

    fullscreen: true,
    controls: true,

    width: '640px',
    height: '480px',

    widthPlayer: '100%',
    heightPlayer: '100%',

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