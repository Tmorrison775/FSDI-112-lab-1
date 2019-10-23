












function postCODE() {
    $.ajax({
        url: '/api/genres',
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(newG),
        success: function (res) {
            console.log(res);
        },
        error: function (details) {
            console.log("Error on POST request: ", details);
        }
    })
}






function displayMovie(movie){
    console.log("this works");
    var container = $(".cat-container");
    var li= `<li><img src="${movie.image}">${movie.title} </li>`;
    container.append(li);

}






function getData(){
    $.ajax({
        url:'/api/movies',
        type: "GET",
        success: function(res){
            var movies = res.objects;
            for(var i = 0; i<movies.length;i++){
                displayMovie(movies[i]);
            }

        },
        error: function(res){
            console.log("Error on get request: ", res);
        }
    });
}





function init(){
    console.log("Hello catalog page");
    getData();
}

window.onload = init();
