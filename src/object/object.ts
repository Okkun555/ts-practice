export default function objectSample() {
  // オブジェクトリテラル記法
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };
  console.log(country);

  country = {
    language: 'English',
    name: 'USA',
  };

  // オプショナル→あってもなくてもOK
  // readonlyは上書きを禁止
  const yuki: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 20,
    lastName: '山田',
    firstName: '透',
  };

  yuki.gender = 'male';
  yuki.lastName = '奥野';

  console.log(yuki);

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  console.log(capitals);
}
