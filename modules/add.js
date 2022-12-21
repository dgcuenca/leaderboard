export default function display(bookList) {
    let bookgenerator = '';
    for (let i = 0; i < bookList.length; i += 1) {
        bookgenerator += `<li>${bookList[i].name}: ${bookList[i].score}</li>`;
    }
    return bookgenerator;
}
