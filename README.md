# NBA React Evaluation

Thanks for taking the time to complete this evaluation!

### Instructions

1. Bootstrap a new [NextJS](https://nextjs.org/) project. If you're comfortable, please use TypeScript.
2. Add [TailwindCSS](https://tailwindcss.com) as a project dependency.
3. Create an API endpoint `/api/players`. The endpoint should respond with the contents of `./data/players.json`, and should also support type-ahead search, to filter players based on their full name.
4. Create an API endpoint `/api/teams`. The endpoint should respond with the contents of `./data/teams.json`
5. Update `./pages/index.js` to fetch the players and teams API **from the client's browser**. Create a "Loading" component that is visible until both endpoints have been fetched.
6. Create a `PlayerCard` component that matches the design of `./docs/player-card.png` (the font used is Roboto). For each player in the `players` API response, render an instance of this component.
7. Display the `PlayerCard` components, grouped by team, with a heading separating each team. Add a search bar to filter the results from the API.
8. Please make sure to include unit tests, where appropriate.
9. Use flexbox or CSS grid to render the player cards in a grid with a varying number of columns based on the screen size.

| screens size | columns |
| ------------ | ------- |
| `< 640px`    | 1       |
| `>= 640px`   | 2       |
| `>= 960px3`  | 3       |

### Player JSON Schema

| Field    | Description               |
| -------- | ------------------------- |
| pid      | Player ID                 |
| ln       | Last Name                 |
| fn       | First Name                |
| ta       | Team Tricode              |
| num      | Jersey Number             |
| pos      | Position                  |
| pts      | Points Per Game           |
| reb      | Rebounds Per Game         |
| ast      | Assists Per Game          |
| stl      | Steals Per Game           |
| headshot | Player Headshot Image URL |
| slug     | Player URL slug           |

### Team JSON Schema

| Field | Description        |
| ----- | ------------------ |
| tid   | Team ID            |
| ta    | Team Tricode       |
| city  | Team City          |
| name  | Team Name          |
| color | Primary Team Color |
| logo  | Team Logo Image URL|

### Testing

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
