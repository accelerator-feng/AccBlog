import movie from './db.js';
import util from '../util';

export default {
    'GET /api/movies': (req, res) => {
        res.json({
            movie: movie.list
        })
    },

    'GET /api/users/:id/movies': (req, res) => {
        res.json({
            movie: movie.list.filter((item, index) => index === 2)
        })
    },

    'GET /api/movies/:id': (req, res) => {
        res.json({
            movie: movie.list.filter(item => item.id == req.params.id)[0]
        })
    },

    'POST /api/movies': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(movie.list, 'id', data.movieId);
            movie.list.push({
                photo: u.photo,
                movieId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: movie.list.length + 1,
                id: movie.list.length + 1,
                name: u.name
            }, )
            data ?
                res.json({})
                :
                res.send({ "status": "error" });
        })
    },
}
