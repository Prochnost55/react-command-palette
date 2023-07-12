Command Palette
Create a Command Palette that opens up with Keyboard events like Command + K. In this problem, The command palette will have navigation links to which a user can navigate. Also, the user can search on the page on the command palette for a link to which they want to navigate.

User Stories and Tasks
On clicking of Command + K (on Mac) and
Control + K (on windows), A modal should pop up that will be an overlay on the screen.
The modal should work on all the pages and throughout the application.
The modal should contain the links to specific pages on the application. The links for the application are provided in the /constants/navlinks.ts file. Navlinks will have name, link and icon fields associated. Icons are provided in the same file.
On clicking the modal background, the modal should close.
On clicking the modal body, the modal should NOT close.
Your application should handle routing for /home, /about and /playground pages. Use react-router-dom package for routing. Version 5 or 6 both are fine.
When the modal is opened, the input search box should be autofocused. That means, the user should not have to manually click in the input box.
Clicking on any nav link inside the command palette should take you to the desired page.
Clicking on any nav link inside the command palette should close the command palette.
Resources
/icons folder contains all the necessary SVG icons.
React Router V5 documentation

https://www.algochurn.com/frontend/command-palette
