$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: "/data/pets/dogs/meow",
        success: function(data){
          console.log(data);
        }
    });
});
