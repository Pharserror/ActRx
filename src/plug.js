/* ActRx plug for ActR
 *
 * A plug for ActR relative to RxJS streams and their events
 */
import SETTINGS from './settings';

const ActRx = {
  naming: (type, ...props) => (
    type.constructor.name !== 'String'
    ? (() => { throw 'Every action supplied to ActionCreator must be a string!'; })()
    : (
      SETTINGS
      .DEFAULT_TYPES
      .concat(props)
      .reduce((acc, prop) => ({ ...acc, [prop]: `${type}/${prop}` }), {})
    )
  )
};

export default ActRx;
