# README

What we're building - a simple app for Hogwarts administrators to keep track of all registered students, and the courses that they are taking

## Models and Associations

<!-- A student can have many courses, and a course can be taken by many students - what does this mean for our database?  Do we need a join table?  (Hint... hint... the answer is yes.) -->

## Schema

<!-- - A Student will have both a name (string) and a grade (integer)
- A Course will have both a name (string) and a description (string)
- StudentCourses will be the join table that ONLY keeps track of the relationships between students and courses (what foreign keys does this table need to hold?) -->

## Order of Operations

- The order in which you build out your app is totally up to you - I like to build out things one by one, as I need them, beginning with the models first, then the migrations, then seed data so that I have something to test!!!

## Deliverables

<!-- - I should be able to go to '/students' and see a list of all students enrolled at Hogwarts -->

<!-- - Each student's name should link to that student's show page -->

<!-- - On a student's show page, I should see their name, their grade, and a list of all of the courses that they are enrolled in -->

<!-- - A course name should link to a show page for that course -->

<!-- - A course's show page should display it's name, a description, and a list of all students enrolled in that course -->

<!-- - I should be able to go to '/students/new' and see a form to register (create) a new student; that form should include a dropdown menu that allows the user to select a course for that student (yes, even though a student can have many courses, on the create form we just register them with one course) -->

<!-- - Submission of that form should redirect our user to the new student's show page, where they should see the course that the student was just enrolled in -->

<!-- - Courses can be edited; on the '/courses/:id/edit' form I should see a checkbox that renders all students, and I can enroll multiple students at a time in that course; this form should also be pre-populated with the current properties; submission of this form should redirect the user to the course show page -->

- Validations
    - a student cannot be created without a name
    - a student's name must be unique
    - a course must have a name 
    - When a user attempts to submit a form with errors, we should redirect them to the form and display those errors so that the user knows what fields to correct
- Other features???
    - On Student Roster (students index page) list students by grade level?
    - On a course's show page, display the number of students currently enrolled
