export function doWorkCallback(simulateError: boolean, callback: (result?: number, err?: string) => void): void {
  console.log("Starting work (callback)...");
  setTimeout(() => {
    if (simulateError) {
      callback(undefined, "An error occurred while processing");
    } else {
      console.log("Finished working.");
      callback(42, undefined);
    }
  }, 2000);
}
