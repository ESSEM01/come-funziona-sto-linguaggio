import type { HttpContext } from '@adonisjs/core/http'
import Movie from '#models/movie'
import User from '#models/user'


export default class HomeController {
    async index({ view }: HttpContext) {
        const movies = await Movie.all()   //Fa una query di tutti gli elementi
        const users = await User.all()

        return view.render('pages/home', { movies, users })
    }

    async viewUsers() {
        const users = await User.all()
        return users
    }

    async addUser(ctx: HttpContext) {
        console.log(ctx.request.all())
        const user = await User.create(ctx.request.all())
        user.save()
        return user 
        
    }

    
}