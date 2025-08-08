
/**
 * This is a manager class which contains all active intervals during the game.
 * Every interval has to add here. 
 * They'll be killed after every round or level. 
 */
export class IntervalHub {

    // #region attributes

    static allIntervals = [];

    // #endregion attributes

    // #region methods

    /**
     * Creats and starts an interval and save it into an array. 
     * 
     * @param {function} func to call on everey interval 
     * @param {number} timer defines how often an interval will be called.
     */
    static startInterval({func, timer} = {}) {
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    }

    /**
     * Stops all active intervals which created with this manager.
     */
    static stopAllIntervals() {
        IntervalHub.allIntervals.forEach(clearInterval);
    }

    // #endregion methods

}