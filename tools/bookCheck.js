const testRecievedBook = (bookObj) =>{
    if('kind' in bookObj && "selfLink" in bookObj && "volumeInfo" in bookObj){
        return true
    }else{
        return false
    }
}

module.exports={
    testRecievedBook
}

// {
//     "kind": "books#volume",
//     "id": "RJxWIQOvoZUC",
//     "etag": "NsxMT6kCCVs",
//     "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
//     "volumeInfo": {
//       "title": "Flowers",
//       "authors": ["Gail Saunders-Smith"]
//     }
//   }