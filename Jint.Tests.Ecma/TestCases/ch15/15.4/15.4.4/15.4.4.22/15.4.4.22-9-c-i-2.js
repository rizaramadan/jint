/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-c-i-2.js
 * @description Array.prototype.reduceRight - element to be retrieved is own data property on an Array
 */


function testcase() {

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === 1);
            }
        }

        var arr = [0, 1, 2];
        arr.reduceRight(callbackfn, "initialValue");
        return testResult;
    }
runTestCase(testcase);
