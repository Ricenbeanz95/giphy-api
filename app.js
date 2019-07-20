
//IxzXgrimuEAX7QlwqoWdgfo7VfZOuviB
console.log("works.")


var animals = ["cat","dog"];

$("#search").on("click", function() {
    event.preventDefault();



var UserSearch = $("#Search").val();
console.log(UserSearch)
var queryURL = `https://api.giphy.com/v1/gifs/search?q=${UserSearch}&api_key=IxzXgrimuEAX7QlwqoWdgfo7VfZOuviB&limit=25`


animals.push(UserSearch);
console.log(animals);


$.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      console.log(response);

        // Storing an array of results in the results variable
      
      var results = response.data;



      // Looping over every result item
      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            console.log(results[i]);
            // Creating a div for the gif
            var gifDiv = $("<div>");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var gifImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            gifImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(gifImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);

            //append buttons.
            
            
           

            
          }
        }
    });
        renderButtons();
    });

    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons").empty();

        // Looping through the array of movies
        for (var i = 0; i < animals.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("animal-btn");
          // Adding a data-attribute
          a.attr("data-name", animals[i]);
          // Providing the initial button text
          a.text(animals[i]);
          // Adding the button to the buttons-view div
          $("#buttons").append(a);
        }
      }

      $(document).on("click", ".animal-btn", function(){
          console.log("clicked");
          
          var animal = $(this).attr("data-name");
          
          var queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=IxzXgrimuEAX7QlwqoWdgfo7VfZOuviB&limit=25`
                                                      //template literal, replaces string concadanation.
          console.log(queryURL);
          
          $.ajax({
              url: queryURL,
              method: "GET"
            })
                .then(function(response){
                    console.log(response);
              
                      // Storing an array of results in the results variable
                    
                    var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                            console.log(results[i]);
                            // Creating a div for the gif
                            var gifDiv = $("<div>");
                
                            // Storing the result item's rating
                            var rating = results[i].rating;
                
                            // Creating a paragraph tag with the result item's rating
                            var p = $("<p>").text("Rating: " + rating);
                
                            // Creating an image tag
                            var gifImage = $("<img>");
                
                            // Giving the image tag an src attribute of a proprty pulled off the
                            // result item
                            gifImage.attr("src", results[i].images.fixed_height.url);
                
                            // Appending the paragraph and personImage we created to the "gifDiv" div we created
                            gifDiv.append(p);
                            gifDiv.append(gifImage);
                
                            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                            $("#gifs-appear-here").prepend(gifDiv);
                
                            //append buttons.
                            
                            
                           
                
                            
                          }
                        }
                })
      });

      renderButtons();

    // buttons = ["apples","pears"]
    // for (let i = 0; i < buttons.length; i++) {
    //     $("#buttons").append(`<button class="new-button">${buttons[i]}</button>`);
        
    // }





    