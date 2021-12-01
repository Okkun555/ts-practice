export default function notExistSample() {
  const name = null;
  console.log(typeof name);

  let age = undefined;

  age = 20;
  console.log('noExistSample:', typeof age);
}
