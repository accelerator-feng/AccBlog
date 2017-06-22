import articles from './db.js';

export default {
  'GET /api/page/1': {
    articles: articles.list.slice(0, 5),
  },
};
