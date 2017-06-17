import comments from './db.js';
import user from '../user/db';
import util from '../util';

export default {
    'GET /api/comments': (req, res) => {
        res.json({
            comments: comments.list
        })
    },

    'GET /api/movies/:id/comments': (req, res) => {
        res.json({
            comments: comments.list
        })
    },

    'POST /api/movies/:id/comments': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(user.list, 'id', data.userId);
            comments.list.push({
                photo: u.photo,
                userId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: comments.list.length + 1,
                id: comments.list.length + 1,
                name: u.name
            },)
            data ?
            res.json({})
            :
            res.send({"status":"error"});
        })
    },

    'POST /api/comments': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(user.list, 'id', data.userId);
            comments.list.push({
                photo: u.photo,
                userId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: comments.list.length + 1,
                id: comments.list.length + 1,
                name: u.name
            },)
            data ?
            res.json({})
            :
            res.send({"status":"error"});
        })
    },
}
