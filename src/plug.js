/* ActX plug for ActN
 *
 * A plug for ActN relative to RxJS streams and their events
 */
import SETTINGS from './settings';

const ActX = (type, ...props) => (
  action.constructor.name !== 'String'
  ? (() => { throw 'Every action supplied to ActionCreator must be a string!'; })()
  : (
    SETTINGS
    .DEFAULT_TYPES
    .concat(props)
    .reduce((acc, prop) => ({ ...acc, [prop]: `${type}/${prop}` }), {})
  )
);

export default ActX;
