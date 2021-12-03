// import World from './world';

// const root = document.getElementById('root');
// const world = new World('Hello World');

// world.sayHello(root);

// import { anySample, notExistSample, primitiveSample } from './basic/index';

// anySample();
// notExistSample();
// primitiveSample();

import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic';
import { isUserSignedIn, sumProductsPrice } from './function/params';

logMessage('Hello Everyone');
logMessage2('Hello Everyone');
logMessage3('Hello Everyone');
logMessage4('Hello Everyone');

isUserSignedIn('ABC', 'test');
isUserSignedIn('TEST');

const sum = sumProductsPrice(100, 200, 300, 500);
console.log('Function sample5', sum);
