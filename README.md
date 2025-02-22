# EYE Security Detections Dashboard

This project shows a dashboard where incident detections are displayed to the user in a filterable table.

## Running the app

- Clone it locally
- `npm install`
- `npm run dev`
- To run the tests, `npm run test`

## Notes on the assignment

- Your API docs are missing `pagerdutyIncidentId` from the response.
- Some information could probably be presented more condensed in the table, for example I would ask your designers if they can provide me some icons to use for the Service column.
- I would also ask if ALL of the information needs to be presented in the table at once. I’d rather suggest to present just some columns in the table, and then give the user the option to click on each incident to bring up a modal with all the detailed information related to that detection.
- Right now I’m not taking advantage of the query options for the API endpoint, I’ve hardcoded it to always retrieve page 0 with a limit of 100. We can make it so that the table retrieves the data one page at a time, but for it to work properly we would need the API response to include a key with the total number of items (we need to pass in the `rowCount` property for the DataGrid to work properly with the `paginationMode='server'` prop).
- I first wanted to use React Testing Library but then I got distracted by [Vitest Browser Mode](https://vitest.dev/guide/browser/)/[Vitest Browser React](https://github.com/vitest-dev/vitest-browser-react) so I wasted some time trying to set it up. At least this homework was a great learning experience and showed me something new. I'll keep an eye on how this initiative is developing. If you're curious you can go to `vite.config.ts` and set `headless: false` to see for yourselves.
- Ultimately, the app itself is just a single page, so there's not really much to be said about "flow" or "E2E" testing. If I had more time, I was thinking of adding a fake Login screen and a Home page that would then link to this dashboard with the Detections. But I hope what I've shown so far is good enough proof that I am not unskilled when it comes to testing.
- And lastly, I didn't write any sort of tests specifically for the table functionality (like does column sorting work?) since I don't think that would be a great use of time. Using an off-the-shelf product like MaterialUI comes with a baked-in assumption that they test their products internally before release.
