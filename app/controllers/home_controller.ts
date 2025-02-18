import type { HttpContext } from '@adonisjs/core/http'
import Movie from '#models/movie'
import User from '#models/user'
import Role from '#models/role'


export default class HomeController {
    async index({ view }: HttpContext) {
        const movies = await Movie.all()   //Fa una query di tutti gli elementi
        const users = await User.all()
        const roles = await Role.all()

        return view.render('pages/home', { movies, users, roles })
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

    async updateUser(ctx: HttpContext) {
        console.log(ctx.request.all())
        const user = await User.findOrFail(ctx.params.id)
        user.merge(ctx.request.all())
        await user.save()
        return user
    }

    async deleteUser(ctx: HttpContext) {
        console.log(ctx.request.all())
        const user = await User.findOrFail(ctx.params.id)
        await user.delete()
        return user
    }

    
}