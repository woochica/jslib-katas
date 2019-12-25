// Add your solution below

// Don't touch this section
Test.assert($("#title").innerHTML, "jQuery selectors kata");
Test.assert($("p")[0].id, "excerpt");
Test.assert($$("p").length, 3);
Test.assert($$(".kata").length, 1);
Test.assert($$(".kata")[0].tagName, "BODY");
