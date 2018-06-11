var rootDiv = document.getElementById('root');
var container = document.createElement('div');

var theLogo = document.createElement('img');
theLogo.src = 'yourprofilepicture';

rootDiv.appendChild(theLogo);
rootDiv.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET','https://ghibliapi.herokuapp.com/films',true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status>=200 && request.status<400) {
        date.forEach(movie => {
            var card = document.createElement('div');
            var header1 = document.createElement('h1');
            header1.textContent = movie.title;
            var paragraph1 = document.createElement('p');
            movie.description = movie.description.substring(0,300); 
            paragraph1.textcontent = `${movie.description}...`;
            container.appendChild(card);
            card.appendChild(header1);
            card.appendChild(paragraph1);
        });
    }else{
        console.log('error');
        const errorMessage = document.createElement('maequee');
        errorMessage.textContent = `Gah, its not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();