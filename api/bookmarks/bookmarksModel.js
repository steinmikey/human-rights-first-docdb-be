const db = require('../../data/db-config.js');

const getbookmarks = () => {
  return db('bookmarks');
};

const getByUserId = async (id) => {
  return await db('bookmarks').where('id', id);
};

const addbookmark = async (bookmark) => {
  await db('bookmarks').insert(bookmark);
  return await db('bookmarks').where('id', bookmark.id);
};
const removebookmark = async (bookmark) => {
  await db('bookmarks').where(bookmark).del();
};

module.exports = {
  getByUserId,
  getbookmarks,
  addbookmark,
  removebookmark,
};
