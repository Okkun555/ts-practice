export default function anySample() {
  let name: any = 'Okuno';
  name = 23;
  console.log(name);

  let nickname: unknown = 10;

  if (typeof nickname === 'number') {
    nickname += 20;
  }
  console.log();
}
