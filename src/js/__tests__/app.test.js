import getBuffer from '../app';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter is ok', () => {
  const abc = new ArrayBufferConverter();
  abc.load(getBuffer());
  expect(abc.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
