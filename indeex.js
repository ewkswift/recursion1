let array = [[[['sardor', 'daler', 'emin']], ['ilhome'], [['dilshod', 'eldor', 'farhod']], ['gulchapchak', 'haydar', 'ilhom']]];


function flaten(arg) {
    let newArray = [];
    let f = 0
    while (f < arg.length) {
        if (Array.isArray(arg[f])) {
            newArray = newArray.concat(flaten(arg[f]));
        } else {
            newArray.push(arg[f]);
        }
        f++
    }
    return newArray;
}
console.log(flaten(array));