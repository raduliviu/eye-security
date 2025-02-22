# EYE Security Detections Dashboard

This project shows a dashboard where incident detections are displayed to the user in a filterable table.

## Running the app

- Clone it locally
- `npm install`
- `npm run dev`

## Notes on the assignment

- Your API docs are missing `pagerdutyIncidentId` from the response
- Some information could probably be presented more condensed in the table, for example I would ask your designers if they can provide me some icons to use for the Service column
- I would also ask if ALL of the information needs to be presented in the table at once. I’d rather suggest to present just some columns in the table, and then give the user the option to click on each incident to bring up a modal with all the detailed information related to that detection
- Right now I’m not taking advantage of the query options for the API endpoint, I’ve hardcoded it to always retrieve page 0 with a limit of 100. We can make it so that the table retrieves the data one page at a time, but for it to work properly we would need the API response to include a key with the total number of items (we need to pass in the `rowCount` property for the DataGrid to work properly with the `paginationMode='server'` prop)
