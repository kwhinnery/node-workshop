var _ = require('underscore');

function Person(properties) {
    _.extend(this, {
        knowsKungFu:false
    }, properties);
}

module.exports = Person;