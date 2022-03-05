var generateAlgorithm = async function(cb, vars, iters) {
    //TODO UNFINISHED
    //returns a function


    if (!iters) iters = 6;
    const f = function() {
        for (let i = 0; i < iters; i++) {
            cb(vars);
        }
    }

    return f;

}