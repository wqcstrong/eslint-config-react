function a() {
  var x = 1;
  console.log('1 + 1' + x);

  const d = {
    x: 1,
  };
  for (const key in d) {
    console.log('d[key]: ', d[key]);
  }

  const arr = ['1', '2', '3'];
  for (const item of arr) {
    console.log('item: ', item);
  }
}
