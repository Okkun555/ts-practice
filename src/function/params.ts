// オプションパラメータをもつ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function params 1: SignIn', userName);
    return true;
  } else {
    console.log('Function params2: Not');
    return false;
  }
};

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice;
  }, 0);
};
