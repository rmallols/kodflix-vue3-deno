import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import getMovies from './movies.ts';

const app = new Application();
const router = new Router();

router
  .get('/api/movies', (ctx) => {
    ctx.response.body = getMovies();
    // Implement your code
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
