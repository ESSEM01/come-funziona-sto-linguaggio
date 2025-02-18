/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const HomeController = () => import('#controllers/home_controller')
const MoviesController = () => import('#controllers/movies_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', [HomeController, 'index']).as('home')

router
    .get('/movies/:slug', [MoviesController, 'show'])
    .as('movies.show')
    .where('slug', router.matchers.slug())

    router.get('/flush', [MoviesController, 'flushCache'])
    router.get('/user', [HomeController, 'viewUsers'])
    router.post('/user', [HomeController, 'addUser'])
    router.put('/user/:id', [HomeController, 'updateUser'])
    router.delete('/user/:id', [HomeController, 'deleteUser'])

// router.get('/movies', () => {}).as('movies.index')
// router.get('/movies/single-movie', () => {}).as('movies.show')
// router.get('/movies/create', () => {}).as('movies.create')
// router.post('/movies', () => {}).as('movies.store')
// router.get('/movies/dongle-movie/edit', () => {}).as('movies.edit')
// router.put('/movies/single-movie', () => {}).as('movies.update')
// router.delete('/movies/single-movie', () => {}).as('movies.destroy')