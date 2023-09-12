const { addNoteHandler, getAllNoteHandler, getDetailNoteHandler, updateNotesHandler, deleteNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getDetailNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNotesHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotesHandler,
  },
];

module.exports = routes;
