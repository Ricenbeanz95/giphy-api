
//IxzXgrimuEAX7QlwqoWdgfo7VfZOuviB
console.log("works.")

$("#search").on("click", function() {
    event.preventDefault();

var UserSearch = $("#Search").val();
console.log(UserSearch)
var queryURL = `https://api.giphy.com/v1/gifs/search?q=${UserSearch}&api_key=IxzXgrimuEAX7QlwqoWdgfo7VfZOuviB&limit=25`
                                            //template literal, replaces string concadanation.


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
        //     var newButton = {
        //         button:$("<button>"),
        //         gifapi
                
        //         $("#buttons").append(newButton);


            
          }
        }
    });

    });


    // buttons = ["apples","pears"]
    // for (let i = 0; i < buttons.length; i++) {
    //     $("#buttons").append(`<button class="new-button">${buttons[i]}</button>`);
        
    // }





    