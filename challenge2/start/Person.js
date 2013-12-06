// TODO: What do we need to do to make Underscore "requireable"?
var _ = require('underscore');

function Person(properties) {
    // This is how you can use underscore to extend the constructed object with some default
    // values, and then with any user-provided values.
    _.extend(this, {
        knowsKungFu:false
    }, properties);
}

// TODO: How do we expose the constructor AS the module?
CHANGE.ME = Person;