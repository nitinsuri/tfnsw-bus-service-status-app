# tfnsw-bus-service-status-app

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/stackblitz-starters-jvlbmz)

BUS REPORT APP REACT TYPESCRIPT TEST
Using React and Typescript, create a bus report page that looks like the screenshot attached in bus-report-example.png.

Requirements:

- On a single page, make all the data from "bus-services-data.json" available to the user. - DONE
- Data can be displayed in a list or a table, or a combination of both. - DONE, used list with CSS FLEX
- Only the names of the organization should be shown initially. When the user clicks on the name of the organization, this should toggle the report showing the data for that organization. - DONE
- The first three numbers of the route variant are the most important, so they should be formatted as "bold". - DONE
- Display the following bus statuses based on its deviation from the timetable - "On Time", "Late", "Early", or "Unknown". -DONE
- Use colors of your choice to signify the status of the buses (e.g. green text might mean that the bus was on-time) - DONE
- You may make any reasonable assumptions in your solution, but ensure that you note these assumptions down in assumptions.txt. - NOTED AS PART OF STATUS
- Add header and footer.
- Write storybook components and tests.

Notes:

- The requirements may be ambiguous, make sure you document any assumptions used.
  -- A negative deviation has been assumed as a bus running LATE. and the positive deviation as a EARLY.
- Commit your work to your local git repository. Create a GitHub repository and push. Our team uses the TDD approach and regular commits would be favourable.
  -- https://github.com/nitinsuri/tfnsw-bus-service-status-app
- You may use NPM, Yarn or any other framework if required. Make sure you document the steps and app versions that we might need to run your project. Please exclude (.gitignore) any generated folder or dependency that would bulk up the repository.
  -- STACKBLITZ (https://stackblitz.com/bus-service-tracker-app) have been used to build the solutions, the code is linked to a GITHUB repository for deployment to any other hosting solution.
- The solution needs to work on the recent versions of Google Chrome.
  -- DONE

Bonus Points (Optional):

- You will score bonus points for creativity and/or making the application look nice.
  -- Used MaterialUI to build the panel, and added font from Google
- Provide a facility to leave notes about each organization. There is no provided endpoint for the notes form submission. The data do not need to be saved to a server/database.
  -- Used localStorage as a Db simulation.
  -- Done, I have used localStorage to store the message. Hence, on refresh of the page the stored message will be retrieved till the browser cache has not been cleared.
  -- A null check has NOT been added to ensure if the textarea has been cleared and saved, it is removed from the localStorage as well.
