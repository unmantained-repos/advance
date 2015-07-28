import R from 'ramda';

const guardNonPromise = fn => (...args) => Promise.resolve( fn(...args) );

const makePipe = R.compose(

  R.map(guardNonPromise),
  R.flatten

);


export default function pipeline(...transforms) {
  const run = R.pipeP(...makePipe(transforms));

  const pl = {
    appendNewFile(filename) {
      return run({filename, pl});
    }

  };

  return pl;
}