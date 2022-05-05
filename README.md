# GetFriended
---
```
Social Media App

I want to create the next Facebook, Twitter and Instagram. I need your help! 

We want to make a social media application that allows people to post their statuses and add other people as their friends.

We would like people to view their friends posts in their homepage as well as their own. It would also be nice to allow users to have their own profile and see all of their posts.

It would be great when you add a friend, a modal pops up with "You added {name}"!

Adding login and sign up functionality would be great! That means a login/sign up page.

A user should have an email, password and ID.

A post should have user id belonging to the user who created it and a description.

Additional featurs I like would be: 

A user would be able to unfriend a friend.

A post can have likes and dislikes!

```

### Figma design link:
  - https://www.figma.com/file/PMxjIII4uKkPEtWJLxmh1n/Untitled?node-id=0%3A1

---
## To Do (updated 12/30)
- Fix up the 'create post' functionality:
  - pull current user.name and display it in any new posts (user must be logged in first)
- change user icon to reflect current user?
  - default image path can be the same, look for new image path in user object
- create a loading spinner (at least for the auth page)
- get posts on homepage to display their user's profile picture
- fix the profile link when navigating from another profile
- Clean up CSS, make the whole thing look pretty




## Done (updated 12/30)
- display posts on the homepage
 - use dummy posts and users for now
- generate pop-up modal on click of the Create Post button on homepage
- start on a profile page component
- make the modal close on background click
- set up a Posts subject
  - subscribe in posts component ngOnInit and display posts live on the home/front page
- Set up routes, get the navbar working
- auth component with a signup/sign in form linked to Firebase authentication
- auth component should show some kind of error if passwords don't match (on signup), or email/password is not valid (on either)
  - this should also disable the submit button
- Suggested Friends feature ~~(homepage, probably?)~~ created a Suggested Friends component
- add validation to the auth page
  - make sure email is a valid email, password is at least six characters
    - for signup only: make sure password and password confirm fields match before submitting form
- Give the post modal a title input
- fix wonky profile pictures on user profiles (specifically Boba Fett & the Ultimate Warrior)
- Create 'Add Friend' and 'Delete Friend' buttons
  - create modal popups for when user adds or deletes a friend
- Create 'Like' and 'Dislike' (or similar) buttons for posts
  - maybe sort by score instead of date?
---




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
