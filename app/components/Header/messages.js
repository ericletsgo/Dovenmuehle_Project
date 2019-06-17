/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  input: {
    id: `${scope}.input`,
    defaultMessage: 'String Input',
  },
  list: {
    id: `${scope}.list`,
    defaultMessage: 'List of Strings',
  },
});
