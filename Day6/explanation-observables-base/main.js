const data = require('./data.json');

const { of } = require('rxjs');
const { map, flatMap, zip } = require('rxjs/operators');

console.log('Funca');

const getBooksFromServer = () => {
   // return of(data.authors);
   return of(data.books);
};
/*
const getBooksJavascriptInTitle = (id) => {

    return getBooksFromServer()
    .pipe(map((books) => {
        return books.filter(b => b.id == id);
        //return books.filter(b => b.title.includes('JavaScript'));
    }))
}

getBooksFromServer().subscribe((books) => {
    console.log('books', books);
});

const getAuthorById = (id) => {
    return getBooksFromServer()
    .pipe(map((books) => {
        return books.filter(b => b.id == id);
        //return books.filter(b => b.title.includes('JavaScript'));
    }))
}

getAuthorById(1).subscribe((author) => {
    console.log(author);
});

const getBooksWithYear = () => {
    return getBooksFromServer()
    .pipe(map((books) => {
        books.year = +books.published.split('-',1)[0];
        delete book.published;
        return books;
      //  b => b.published = b.published.substr(0,3);
    }))
}
/*

getBooksWithYear().subscribe((books) => {
    console.log(books);
})
*/
const getBookNames = (minPages) => {
    return getBooksFromServer()
    .pipe(map((books) => {
        console.log(books);
        return books.filter(b => b.pages > minPages).map((item)=>{
            console.log(item);
            return item.title;
        });
        //return books.filter(b => b.title.includes('JavaScript'));
    }))
};


//getBookNames(300).subscribe((bookNames) => {
 //   console.log(bookNames);
//})
/*
const getAuthorOfBook = (bookTitle) => {
    return getBooksFromServer()
    .pipe(map((books) => {
        
        return books.find(b => b.title === bookTitle);
            //console.log(item);
            return item;
        })), flatMap((book) =>( {
            return getAuthorById(book.id);
        })
        //return books.filter(b => b.title.includes('JavaScript'));
    })
}

getAuthorOfBook('Speaking JavaScript').subscribe((author)=>{
    console.log(author);
})*/

//const getBooksAndAuthors = () =>{
  //  return getBooksFromServer().pipe().subscribe(zip(getAuthorsFromServer()))
//}

//getBooksAndAuthors().subscribe((booksAndAuthors) => {

    
//})
///////

const getBookByIdWihtAuthor = ((bookId) => {
    return getBooksFromServer()
    .pipe(flatMap((books) => {

         const book = books.find(b => b.id === bookId);

         return getAuthorById(book.id).pipe(zipe(of(book)));
    })), map((authorAndBook) => {
        const [ author , book ] = authorAndBook;

        delete book.authorId;
        book.author = author;
        return book;
    })
})

getBookByIdWihtAuthor(1).subscribe((book) => {
    console.log(book);
})


