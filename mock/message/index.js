import messages from './db.js';
import user from '../user/db';
import util from '../util';

export default {
    'GET /api/messages': (req, res) => {
        res.json({
            messages: messages.list
        })
    },

    'GET /api/movies/:id/messages': (req, res) => {
        res.json({
            messages: messages.list
        })
    },

    'POST /api/movies/:id/messages': (req, res) => {
        res.json({
            messages: messages.list
        })
    },

    'POST /api/messages': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(user.list, 'id', data.userId);
            messages.list.push({
                photo: u.photo,
                userId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: messages.list.length + 1,
                id: messages.list.length + 1,
                name: u.name
            },)
            data ?
            res.json({})
            :
            res.send({"status":"error"});
        })
    },
}
