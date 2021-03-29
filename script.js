document.write("Hello, world!");

function sayHello(){
  var response =  prompt("What's your name?");
  alert("Hello "+response+", have a good day!");
  }
sayHello();

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize="25px";
  x.style.color="red";
}

var movies=["Avengers","Captain Marvel","Black Panther","Spiderman"];
movies[0]="Wonder Woman"
movies.push("Avengers");
movies.pop();
console.log(movies)

var movie={
  title:"Avengers",
  time:"12pm"
};


alert(movie.title);
movie.status = "available"
console.log(movie)

var fruits = [];
for (i=1;i<10;i++){
  fruits[i]=prompt("Enter fruit");
};
alert("fruits contains "+ fruits);

var movie2 = ["Avengers","Captain Marvel","Black Panther","Spiderman"];
movie2.forEach(function(movie){
  alert(movie);
})

for (var movie of movie2) {
     console.log(movie);
    };

for (var movie of movieDetails){
     if (movie.status === "available"){
            console.log("The movie " + movie.title + " plays at " + movie.time)
             } else{
                    console.log("Sorry, the movie " + movie.title + " is sold out.")
                     }
                   };
