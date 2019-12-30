const Test = {
    assert: function(actual, expected) {
        if (actual == expected) {
            console.info("passed!");
        } else {
            console.error("Expected: %s, got: %s", expected, actual);
        }
    }
};
