# CPSC 2650 React Minimal Starter with Vite

## Instructions:

- Run the following: 
    - `npm run build`
    - `npm start`
- React application code in `react/src`
- Express application code in `express`

TODAY:
- Complete the Hacker news app:
    - TODO: find a way to compare the ID of a newly-fetched comment with the previous comments, and NOT add the comment if it's a duplicate
        - Problem: the interval in which we fetch the comments does not have access to the most recent comment list in state. 
        - Solution: use a ref that is up to date to store the commentID
    - TODO: implement a filter system; type a search string, and highlight the comments from Hacker News that match that string. (useMemo)