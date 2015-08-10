import {hello} from 'src/hello';

describe('hello', () => {
    it('should return Hello Foo', function () {
        expect(hello()).toEqual('Hello Foo');
    });
});

describe('hello', () => {
    it('should return Good bye', function () {
        expect(hello(true)).toEqual('Good bye');
    });
});