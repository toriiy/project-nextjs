This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.


## More About This Project
## Api Service functions

- Function getMovies fetches 20 movies in home page (MoviesPage)
- Function getMovieById fetches movie by their id on MoviePage
- Function getHomeMovie fetches movie called Venom: The Last Dance on home page (MoviesPage)
- Function getSearchMovie allows user to search film/ It fetches data using query from input
- Function getMovieVideo fetches all movie videos which are filtered in MovieVideos and return trailer
  in MovieTrailer component
- Function getGenres fetches all genres in Genres component
- Function getMoviesByGenre fetches movie by its genre in GenrePage

## Components

- MovieInfo contains info about current movie and includes indo from Rating, StarRating, Genre,
  SpokenLanguage, MovieVideos, ProductionCompany and ProductionCountry components
- Header contains info from UserInfo and Search components
- MovieList contains info from MoviePreview which contains info from PosterPreview component
- Pagination component allows user to load next page to see more content
- StarsRating component allows user to rate a film but don't send this info to API

## Urls

Urls file contains to most used part of link to fetch data


