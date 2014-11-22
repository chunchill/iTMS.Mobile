'use strict';

define(['src/app/services/demoServices'], function(demoService) {

    describe('Testing Demo services', function() {

        beforeEach(function() {

        });

        it('should be able to say something', function() {
            var sentens=demoService.saySomething("I love jesmine!");
            var expectedResult="Hi,you want to say: "+"I love jesmine!";
            expect(sentens).toEqual(expectedResult);
        });


    });

});