import { doWorkCallback } from '../src/util/do-work-callback';
import { doWorkPromise } from '../src/util/do-work-promise';

describe("Asynchronous programming", () => {
  test("With a callback", (done) => {
    /*
      GOAL:
      Write a test that calls `doWorkCallback` and asserts that the result
      is what we expect.
      If the first parameter `simulateError` is true, we expect
      an error to be returned instead of a result.
      You can split this into 2 tests (one with `simulateError=true` and one
      with `simulateError=false`) if you like.

      HINT:
      A `done` function is passed into the test by jest automatically,
      this is for async programming that does not use async/await. You
      simply call the function `done()` when your code has finished executing.
     */
    expect(false).toBe(true);
  });

  test("With promises", async () => {
    /*
      GOAL:
      Write a test that calls `doWorkPromise` and assert that the result
      is what we expect.
      If the first parameter `simulateError` is true, we expect
      an error to be returned (hint: thrown) instead of a result.
      You can split this into 2 tests (one with `simulateError=true` and one
      with `simulateError=false`) if you like.

      HINT:
      The function is labeled `async` for you.
     */
    expect(false).toBe(true);
  });
});
