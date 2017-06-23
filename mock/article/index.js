import articles from './db.js';

export default {
  'GET /api/article/page/:id': (req, res) => {
    const end = 5 * req.params.id;
    res.end(
      JSON.stringify({
        articles: articles.list.slice(end - 5, end),
        total: articles.list.length,
      }),
    );
  },
};
