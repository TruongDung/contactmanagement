
# Purpose of application
This is a contact manager for managing people and their email addresses. Users of this application should be able to view/edit/add/delete their contacts.

Note: The application is missing a few core features in its current state. Your task is to add these 

# Tech stack / Setup instructions
The client is Angular 6 and built via the Angular CLI. Run `npm install` to install dependencies and then use `ng serve` to run the application. (runs on http://localhost:4200/)

The server is ASP.NET and built using Visual Studio 2017 (VS2017 Community edition is available for free from Microsoft's website). (runs on http://localhost:50778/) (To simplify setup for applicants, we are storing the application's data in memory instead of a relational database.)

# Requirements
Please add the following features to the application:

## Add/Edit/Delete
Add the ability to add, edit, and delete a contact. (The API already allows for these functions, but these functions are not currently available from the client application).

## Search
Add search to the application that allows users to type in a string value and return any contacts where the first name, last name, or email address contains the value that was specified.

## Contact Groups
Add a new route/page to the application called "Groups". Should be accessible from the navbar and located at http://localhost:4200/groups. Add the ability to add/edit/delete a group. A group has a name, a description, and a collection of contacts. The Groups page should display each group and provide a UI to add and remove contacts from the group. A contact can belong to more than one group.

# Submission
Once these changes have been committed to your local Git repo, please bundle your changes using `git bundle` saving the file as `yourfirstname-yourlastname.bundle`, and email it to luke.lengl@thoughttrace.com.
