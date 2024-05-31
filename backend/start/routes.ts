/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ response }) => {
  response.send('Hello world')
})

// Fait ensorte que toutes les routes ont /api devant
router.group(() => {
  router.get('/todolist', "#controllers/todolist_controller.index")
  router.post('/todolist', "#controllers/todolist_controller.store")
  router.get('/todolist/:id', "#controllers/todolist_controller.show")
  router.put('/todolist/:id', "#controllers/todolist_controller.update")
  router.put('/todolist/status/:id', "#controllers/todolist_controller.updateStatus")
  router.delete('/todolist/:id', "#controllers/todolist_controller.destroy")
  router.get('/todolist/search', "#controllers/todolist_controller.search")
}).prefix('/api')


