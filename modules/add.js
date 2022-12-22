export default function display(bookList) {
  let bookgenerator = '';
  for (let i = 0; i < bookList.length; i += 1) {
    if (i%2) {
      bookgenerator += `<li class="black">${bookList[i].user}: ${bookList[i].score}</li>`;
    } else {
      bookgenerator += `<li class="white">${bookList[i].user}: ${bookList[i].score}</li>`;
    }
  }
  return bookgenerator;
}
