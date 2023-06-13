import _ from 'lodash';

export default (text) => {
  const words = _.words(_.toLower(text));
  return words.reduce((acc, word) => ({ ...acc, [word]: (acc[word] || 0) + 1 }), {});
};
// END