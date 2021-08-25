export function doWorkPromise(): Promise<void> {
  return new Promise((resolve, _reject) => {
    console.log("Starting working...");
    setTimeout(() => {
      console.log("Finished working.");
      resolve();
    }, 2000);
  });
}
