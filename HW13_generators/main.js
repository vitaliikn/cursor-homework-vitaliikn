//1.Створіть нескінченний генератор ідентифікаторів
function* endlessgenerator() {
    let i = 1;

    while (true) {
        yield i++;
        }
    }

const id = endlessgenerator();

console.log('N1 Endless generator : ');
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

//2. Створіть генератор, який буде регулювати розміри шрифту для вашого сайту
function* getFontGenerator(fontSize = 14) {
    let result = yield fontSize;
    while (true) {
        if (result === 'up') {
            result = yield fontSize += 2;
        } else if (result === 'down') {
            result = yield fontSize -= 2;
        } else {
            result = yield fontSize;
        }
    }
}
const generator = getFontGenerator(14);

console.log('Font Generator : ')
console.log('fontGenerator.next("up").value =>',generator.next("up").value);
console.log('fontGenerator.next("up").value =>',generator.next("up").value);
console.log('fontGenerator.next("up").value =>',generator.next("up").value);
console.log('fontGenerator.next().value =>',generator.next().value);
console.log('fontGenerator.next("down").value =>',generator.next("down").value);
console.log('fontGenerator.next("down").value =>',generator.next("down").value);
console.log('fontGenerator.next("down").value =>',generator.next("down").value);
