import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getMovies, getMovie } from './movies.ts';

const app = new Application();
const router = new Router();

router
  .get('/api/movies', (ctx) => {
    ctx.response.body = getMovies();
  })
  .get('/api/movies/:movieId', (ctx) => {
    ctx.response.body = getMovie(ctx.params.movieId);
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
