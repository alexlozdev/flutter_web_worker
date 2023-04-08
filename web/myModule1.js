function foo(count) {
    //let result = [];

    var s = 0;
    for(let i = 1; i <= count; i++) {
        s = s + i;

        for (let j = 1; j <= i; j++) {
            s = s + j;
        }


    }
    return s;
}

