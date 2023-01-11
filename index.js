let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const appendCat = [...cats.slice(0), name,];
    return appendCat;
}

function prependCat(name){
    const prependCat = [name, ...cats.slice(0)];
    return prependCat; 
}

function removeLastCat() {
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
