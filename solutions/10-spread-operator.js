// BEGIN
function make(name, object = {}) {
    const company = {
        name,
        state: object.state || 'moderating',
        createdAt: object.createdAt || Date.now()
    }
    for (let i in object) {
        company[i] = object[i]
    }
    return company
}

export default make
// END