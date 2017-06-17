import articles from './db.js';
import user from '../user/db';
import comments from '../comment/db';
import util from '../util';

export default {
    'GET /api/articles': (req, res) => {
        res.json({
            articles: articles.list
        })
    },

    'GET /api/articles/:id': (req, res) => {
        res.json({
            article: articles.list.filter(item => item.id == req.params.id)[0]
        })
    },

    'GET /api/articles/:id/comments': (req, res) => {
        res.json({
            articles: comments.filter(item => item.id == req.params.id)
        })
    },

    'POST /api/articles/:id/comments': (req, res) => {
        res.json({
            article: articles.list.filter(item => item.id == req.params.id)[0]
        })
    },

    'POST /api/articles': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(user.list, 'id', data.userId);
            articles.list.push({
                photo: u.photo,
                userId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: articles.list.length + 1,
                id: articles.list.length + 1,
                name: u.name,
                tags: data.tags,
                title: data.title,
            },)
            data ?
            res.json({})
            :
            res.send({"status":"error"});
        })
    },
}
