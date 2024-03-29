let assert = require('assert');

module.exports = {

    throws : async function(callback, message){
        try {
            await callback()
        } catch(ex) {
            return ex
        }
        
        assert.fail(message)
    },
    
    includes : function(a, b, message){
        assert.equal(a.includes(b), true, message)
    },
    
    excludes : function(a, b, message){
        assert.equal(a.includes(b), false, message)
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
    
    gt : function(a, b, message){
        assert.equal(a > b, true, message);
    },

    lt : function(a, b, message){
        assert.equal(a < b, true, message);
    },
    
    true : function(a, message){
        assert.equal(a, true, message);
    },

    false : function(a, message){
        assert.equal(a, false, message);
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

    notEmpty : function(a, message = 'Array is expected to contain items, but found empty.'){
        assert.equal(!!a, true, 'Array is null')
        assert.equal(Array.isArray(a), true, 'Argument is not array');
        assert.equal(a.length > 0, true, message);
    },
        
    single : function(a, message){
        assert.equal(Array.isArray(a), true);
        assert.equal(a.length, 1, message);
    },
     
        
    /**
     * Asserts that an array has the given length.
     */
    length : function(array, length, message){
        assert.equal(Array.isArray(array), true);
        assert.equal(array.length, length, message);
    }
};
