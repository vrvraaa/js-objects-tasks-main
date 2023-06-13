const get = (obj, keys) => {
    if (keys.length === 1) {
      return Object.hasOwnProperty.call(obj, keys[0]) ? obj[keys[0]] : null;
    }
    return keys.reduce((acc, key) => (acc && Object.hasOwnProperty.call(acc, key)) ? acc[key] : null, obj);
  };
  
  export default get;
// END