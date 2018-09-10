let text = "Domo arigato!";

function useless(ninjaCallback) {
    return ninjaCallback();
}

assert(useless(function(){return text;})===text, "The useless function works! "+text);