export function doWorkPromise(simulateError: boolean): Promise<number> {
  return new Promise((resolve, _reject) => {
    console.log("Starting work (promise)...");
    setTimeout(() => {
      if (simulateError) {
        throw new Error("An error occurred while processing");
        // @NOTE you could also do:
        // reject("An error occurred while processing");
        // And this would reject with a string (rather than an Error object)
      } else {
        console.log("Finished working.");
        resolve(42);
      }
    }, 2000);
  });
}
