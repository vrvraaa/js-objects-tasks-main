import _ from 'lodash';

function normalize(obj) {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
}

export default normalize;