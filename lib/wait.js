export async function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}