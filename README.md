### To deploy this test

```
$ git clone https://bitbucket.org/giancarlo88/movies-code-test-js
$ cd movies-code-test-js
$ npm install && npm start
```

### Some quick notes about the test in its current iteration: 
- I didn't focus on unit tests as much as I normally would as I wanted to concentrate on building as much functionality as I could. 

- I built a 'skeleton' of the app to the best I could in the time-box. Instead of focusing on one aspect of the app I tried to divide my time among configuring the store, configuring the API calls and responses, styling, and handling app state.

- The listing object in the app is meant to contain the information about a certain movie when it's selected. This would be populated by the Listing container triggering an API after it mounts. Of course I didn't get to this part yet :P

- I should probably mention that my API key never worked—I think they've recently changed their policy and now you have to be a patron and register it. I wouldn't have had much time regardless, but next stage would have been to populate the store, then use the result data to map out MovieTiles in the SearchResults component.

I've included the original README below vvv

# Seenit Code Test #

Please fork the repository in order to work on the code.

The project is to create a simple app to list all the movies available in the Open Movie Database meeting the following criteria:

- It should be a movie and not a TV show in order to be listed in the app
- The movie must have been released in 2016
- The movie must have the word 'star' in its title

Please find the designs and the user journey available here: https://drive.google.com/file/d/0B2sB_dfwp_jDczBDMldCUXA2MFk/view?usp=sharing

The app should display all the movies available in the database and match the above criteria. When a user clicks on one of the movies, details of the movie should be shown, including; the title of the movie, the description of the plot, a list of actors and an IMDB rating. Finally, the user should have the option to add the movie to their "favourites." Favouriting a movie should move it to the top of the list. Please check the designs provided for further details.

We would like you to implement the project using React and Redux. Please fork the repository and build the app to meet the criteria listed above.

We are looking for engineers who have a real passion for building user-centric products. Your coding style, your approach to solving problems as well as your attention to UX is very important to us. There's no hard deadline for this test so feel free to work on it in your spare time. Please take the app as far as you can in about three hours and send it over when you're done!

Good luck and we look forward to seeing what you have built!