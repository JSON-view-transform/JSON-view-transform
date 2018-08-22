const format = require('pg-format');

module.exports = pool => ({
  // create a new doc that's in the process of editing
  createDoc: (req, res, next) => {
    // user comes from req.user (i.e. the deserialized cookie)
    const queryText = 'INSERT INTO documents (owner, name, input_json, output_json, code, last_updated) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const {name, input_json, output_json, code} = req.body;
    const owner = req.user.id;
    const values = [owner, name, input_json, output_json, code, new Date()];
    
    pool.query(queryText, values).then(result => {
      console.log('created');
      
      const doc = result.rows[0];
      res.status(200).json(doc);
    }).catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
  },
  // save a new doc that's in the process of editing
  saveDoc: (req, res, next) => {
    const queryText = 'UPDATE documents SET name=$1, input_json=$2, output_json=$3, code=$4, last_updated=$5 WHERE doc_id=$6 RETURNING *';
    const {name, input_json, output_json, code, doc_id} = req.body;
    const values = [name, input_json, output_json, code, new Date(), doc_id];
    
    pool.query(queryText, values).then(result => {
      console.log('saved');
      
      const doc = result.rows[0];
      res.status(200).json(doc);
    }).catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
  },
  // get all docs for a user
  getDocs: (req, res, next) => {
    const queryText = 'SELECT doc_id, name FROM documents WHERE owner=$1 ORDER BY last_updated DESC';
    const owner = req.user.id;
    const values = [owner];
    
    pool.query(queryText, values).then(result => {
      console.log('retrieved docs');
      const docs = result.rows;
      res.status(200).json(docs);
    }).catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
  },
  // get given document's contents
  getDocContent: (req, res, next) => {
    const queryText = 'SELECT name, input_json, output_json, code FROM documents WHERE owner=$1 AND doc_id=$2';
    const {doc_id} = req.body;
    const owner = req.user.id;
    const values = [owner, doc_id];
    
    pool.query(queryText, values).then(result => {
      console.log('retrieved doc content');
      const doc = result.rows[0];
      res.status(200).json(doc);
    }).catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
  }
});

