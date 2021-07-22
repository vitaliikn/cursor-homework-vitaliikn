async function getRandomChinese(l) {
  let i = 0;
  let symbolsArray = [];
  while (i < l) {
    const randomChinese = new Promise((resolve, reject) => {
      setTimeout(() => {
        const symbol = Date.now().toString() % 10e5;
        const chinese = (String.fromCharCode(symbol));
        resolve(chinese);
        i++;
      }, 50);
    });
    symbolsArray.push(await randomChinese);
  }
  return symbolsArray.join(' ');
}

getRandomChinese(4).then(console.log);