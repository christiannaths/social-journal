import smartquotes from 'smartquotes';
import nowidow from 'prevent-widows';
import locales from '../locales.js';

function text(input) {
  let output = input;
  output = smartquotes(output);
  output = nowidow(output, { encoding: 'unicode' });

  return output;
}

// content = locale('en').content
// content.welcome.intro
function content(locale = 'en') {
  function reducer(acc, key) {
    const mutated = { ...acc, ...locales[key] };
    // console.log({ acc, key });
    // console.log(mutated);

    if (key === 'translations') return mutated;

    return { ...acc, [key]: locales[key] };
  }

  function mapRecurse(position) {
    return Object.keys(position).reduce(reducer, {});
    // position = position[key];
    //   console.log(i, { position, key });

    //   if (key === 'translations') return [true, position[key][locale]];

    //   return [true, {}];
    // });
  }

  // let [halt, pointer] = [false, locales];

  // console.log({ halt, pointer });

  const result = mapRecurse(locales);

  console.log(result);
  // const [a, b] = result;

  // console.log({ result });
  // console.log({ a, b });

  // do {
  //   [halt, pointer] = mapRecurse(pointer);
  //   console.log({ halt, pointer });
  // } while (!halt);

  // const content =

  return null;
}

export { text, content };
