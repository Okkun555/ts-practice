export default function tupleSample() {
  // 厳格な配列 = タプル
  const response: [number, string] = [200, 'OK'];
  console.log('tuple sample 1', response);

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['かな', '透子', '優子'];
  girlfriends.push('Misa');
}
