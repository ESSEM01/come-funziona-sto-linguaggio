/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
const DirectorsController = () => import('#controllers/directors_controller')
const MoviesController = () => import('#controllers/movies_controller') 

router.get('/', [MoviesController, 'index']).as('home')

router
    .get('/movies/:slug', [MoviesController, 'show'])
    .as('movies.show')
    .where('slug', router.matchers.slug())

    router.get('directors', [DirectorsController, 'index']).as('directors.index')
    router.get('directors/:id', [DirectorsController, 'show']).as('directors.show')

    router.get('/flush', [MoviesController, 'flushCache'])
// router.get('/movies', () => {}).as('movies.index')
// router.get('/movies/single-movie', () => {}).as('movies.show')
// router.get('/movies/create', () => {}).as('movies.create')
// router.post('/movies', () => {}).as('movies.store')
// router.get('/movies/dongle-movie/edit', () => {}).as('movies.edit')
// router.put('/movies/single-movie', () => {}).as('movies.update')
// router.delete('/movies/single-movie', () => {}).as('movies.destroy')