export function doWorkCallback(callback: (err: string | undefined) => void): void {
  console.log("Starting working...");
  setTimeout(() => {
    console.log("Finished working.");
    callback(undefined);
  }, 2000);
}
