let assert = require('assert');

module.exports = {

    throws : async function(callback, message){
        try {
            await callback();
            assert.fail(message);
        } catch(ex) {
            return ex;
        }
    },
    
    equal : function(a, b, message){
        assert.equal(a, b, message);
    },

    fail : function(message){
        assert.equal(true, false, message);
    },

    zero : function(a, message){
        assert.equal(a, 0, message);
    },

    true : function(a, message){
        assert.equal(a, true, message);
    },

    null : function(a, message){
        assert.equal(a, null, message);
    },

    notNull : function(a, message){
        assert.equal(a === null, false, message);
    },

    empty : function(a, message){
        assert.equal(Array.isArray(a), true);
        assert.equal(a.length, 0, message);
    },

    single : function(a, message){
        assert.equal(Array.isArray(a), true);
        assert.equal(a.length, 1, message);
    }
};
