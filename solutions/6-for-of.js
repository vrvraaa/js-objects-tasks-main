// BEGIN
function pick(obj, keys) {
    const result = {};
    for (let key of keys) {
      if (key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  export default pick;
// END