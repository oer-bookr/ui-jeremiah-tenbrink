![alt text](https://github.com/oer-bookr/ui-jeremiah-tenbrink/blob/master/images/oer%20bookr%20logo%20@color-brown.png "Bookr Logo")

---

# Bookr (Open Educational Resources) 

[Live Demo](https://gracious-goldstine-d76cfe.netlify.com/)


This is a landing page built for OER Bookr. To use this repo copy the link to the repo. Clone it to your computer using command line 
``` 
git clone urlGoesHere
```
Once you have the repo on your computer you can run npm install in the base dir. Once npm has finished installing all the dev dependencies.
Run 
```
npm start
``` 
to start live server and the less compile watcher. Less compile watcher will watch for changes to the main.less file or any file that has been
imported into the main.less file and once a change is notice will compile the main.css file with source mapping to allow better 
debugging of your css. Once you have the page how you like. You can run
```
npm compile-css 
```
This will produce a minified auto prefixed version of css in the assets/main.css file. This version of css file is for production use and 
not good for regular development. 

---

This project comes with a large hero image with a logo-img in the navbar top left. 

![alt text](https://github.com/oer-bookr/ui-jeremiah-tenbrink/blob/master/images/Hero.JPG "Hero Image")

---
The nav bar slides down once you have scrolled down the page enough to no longer see the top of the hero image. 

![alt text](https://github.com/oer-bookr/ui-jeremiah-tenbrink/blob/master/images/Navbar.JPG "Nav bar")

---
The site is fully responsive and the links in the nav bar take the user to different points on the page. The signup and login links in the nav
bar are linked to a demo of the actuall project. Not the landing page. 

At smaller screen sizes the nav bar will turn into a full page nav bar once the menu button is clicked. Click the x to close the 
full page nav bar. 

![alt text](https://github.com/oer-bookr/ui-jeremiah-tenbrink/blob/master/images/FullPageNavBar.JPG "Nav bar")
