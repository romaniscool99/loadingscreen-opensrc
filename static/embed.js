"use strict";
let destination = "";

try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad # string or bad URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {        
    setTimeout(() => {
      lowtaperfade()
  }, 1500);
    setTimeout(() => {
      window.open(
        __uv$config.prefix + __uv$config.encodeUrl(destination),
        "_self"
      );
    }, 1700);
    setTimeout(() => {
      highslipperybuzz()
  }, 7000);
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
