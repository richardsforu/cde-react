
function* myGenerator() {
    let first = yield 'My First Yield'
    let second = yield 'My Second Yield'
    return 'third return value'
}

let it=myGenerator();
