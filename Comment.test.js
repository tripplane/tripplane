const post_test = require('./Comment');
const post_test1 = require('./Comment');

test('run the first function except to get 0 beacouse the vars init ', () => {
    expect(post_test1()).toBe(0);
  });