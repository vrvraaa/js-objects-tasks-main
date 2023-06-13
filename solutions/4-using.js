function getDomainInfo(url) {
    const hasProtocol = /^https?:\/\//i.test(url);
    const domain = url.replace(/^https?:\/\//i, '');
    const scheme = hasProtocol ? url.match(/^https?:\/\//i)[0] : 'http://';
    return { scheme, name: domain };
  }
  
  export default getDomainInfo;
