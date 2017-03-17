window.onload = function () {
   
    var editID = document.getElementById('editID');
    var editAuthor = document.getElementById('editAuthor');
    var editTitle = document.getElementById('editTitle');
    var addTitle=document.getElementById('addTitle');
    var addAuthor=document.getElementById('addAuthor');
    var gooBooks = document.getElementById('gooBooks');
    var url = 'https://www.forverkliga.se/JavaScript/api/crud.php?';
    var goourl = 'https://www.googleapis.com/books/v1/volumes?';
    
	document.getElementById('getKeyButton').onclick = function () {
		fetch(url + 'requestKey')
		.then (function(response){
			return response.json();
	})
		.then (function(json){
			document.getElementById('apiKey').innerHTML = "The API-Key is: "+JSON.stringify(json.key);
            document.getElementById('theMess').innerHTML = "A new key has been generated";
		})
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
		
	};
    document.getElementById('getBooksButton').onclick = function (){
        document.getElementById('bview').innerHTML ='';
		fetch (url+'op=select&key=wHdhg')
		.then (function(response){
			return response.json();
	})
		.then (function(json){
            for (let i=0; i<json.data.length; ){
            document.getElementById('bview').innerHTML +='<br>ID-'+JSON.stringify(json.data[i].id)+'<br>';
			document.getElementById('bview').innerHTML +='Author-'+JSON.stringify(json.data[i].author)+'<br>';
            document.getElementById('bview').innerHTML +='Title-'+JSON.stringify(json.data[i].title)+'<br>';
            i++;
            }
            document.getElementById('theMess').innerHTML = "All books has been found";
		})
		.catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
	};
    document.getElementById('addBooksButton').onclick = function (){
        fetch (url+'op=insert&key=wHdhg&title='+addTitle.value+'&author='+addAuthor.value)
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            document.getElementById('theMess').innerHTML = "Book has been added";
            addTitle.value = '';
            addAuthor.value = '';
        })
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
    };
    editID.addEventListener ("keypress", function(event){
        if (event.keyCode==13){
            fetch (url+'op=select&key=wHdhg')
		      .then (function(response){
			 return response.json();
	})
            .then (function(json){
                for (let i=0; i<json.data.length; ){
                    let compareID = JSON.stringify(json.data[i].id);
                    if (compareID === editID.value){
                        let aut = JSON.stringify(json.data[i].author);
                        let tit = JSON.stringify(json.data[i].title);
                        aut = aut.split('"').join('');
                        tit = tit.split('"').join('');
                        editAuthor.value = aut;
                        editTitle.value = tit;
                        document.getElementById('theMess').innerHTML = "Book has been found!";
                    } i++;
                }
            })
            .catch (function(error){
                document.getElementById('theMess').innerHTML = error;
            })
                }           
        })
    editAuthor.addEventListener ("keypress", function(event){
        if (event.keyCode==13){
            fetch (url+'op=update&key=wHdhg&id='+editID.value+'&title='+editTitle.value+'&author='+editAuthor.value)
            .then (function(response){
                return response.json();
            })
            .then (function(json){
            document.getElementById('theMess').innerHTML = "Author has been edited";
        })
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
        }
    })
    editTitle.addEventListener ("keypress", function(event){
        if (event.keyCode==13){
            fetch (url+'op=update&key=wHdhg&id='+editID.value+'&title='+editTitle.value+'&author='+editAuthor.value)
            .then (function(response){
                return response.json();
            })
            .then (function(json){
            document.getElementById('theMess').innerHTML = "Title has been edited";
        })
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
        }
    })
    document.getElementById('delBookButton').onclick = function () {
        fetch (url+'op=delete&key=wHdhg&id='+editID.value)
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            document.getElementById('theMess').innerHTML = "Book has been deleted";
            editID.value = '';
            editAuthor.value = '';
            editTitle.value = '';
        })
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
    }
    gooBooks.onkeyup = function(){
        fetch (goourl+'q='+gooBooks.value+'&projection=lite&key=AIzaSyAVS7eCCqe46EKq1kmoupuJwZCSLImcya8')
        .then (function(response){
            return response.json();
        })
        .then (function(json){
            let addT = JSON.stringify(json.items[0].volumeInfo.title);
            let addA = JSON.stringify(json.items[0].volumeInfo.authors[0]);
            addT = addT.split('"').join('');
            addA = addA.split('"').join('');
            addTitle.value =  addT;
            addAuthor.value =  addA;
        })
        .catch (function(error){
            document.getElementById('theMess').innerHTML = error;
        })
    }
  };
