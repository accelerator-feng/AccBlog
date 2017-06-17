import music from './db.js';
import util from '../util';

export default {
    'GET /api/music': (req, res) => {
        res.json({
            music: music.list
        })
    },

    'GET /api/users/:id/music': (req, res) => {
        res.json({
            music: music.list.filter((item, index) => index === 2)
        })
    },

    'GET /api/music/:id': (req, res) => {
        res.json({
            music: music.list.filter(item => item.id === req.params.id)
        })
    },

    'POST /api/music': (req, res) => {
        util.bodyParser(req, (data) => {
            const u = util.find(music.list, 'id', data.musicId);
            music.list.push({
                photo: u.photo,
                musicId: u.id,
                content: data.content,
                created_at: '2017-02-13',
                index: music.list.length + 1,
                id: music.list.length + 1,
                name: u.name
            }, )
            data ?
                res.json({})
                :
                res.send({ "status": "error" });
        })
    },
}
