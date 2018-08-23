// middleware
const dbControllerInit = require('../controllers/dbController');

module.exports = (app, pool) => {
  const dbController = dbControllerInit(pool);
  
  // create a new doc that's in the process of editing
  app.post('/api/create_doc', dbController.createDoc);
  
  // save a new doc that's in the process of editing
  app.put('/api/save_doc', dbController.saveDoc);
  
  // get all docs for a user
  app.get('/api/get_docs', dbController.getDocs);
  
  // get given document's contents
  app.get('/api/get_doc_content', dbController.getDocContent);
  
  // delete a document
  app.delete('/api/delete_doc', dbController.deleteDoc);
};

