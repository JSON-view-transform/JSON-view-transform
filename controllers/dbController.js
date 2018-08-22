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
      res.locals.doc_id = doc.doc_id;
      console.log(res.locals.doc_id);
      next();
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
      next();
    }).catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
  },
  // getDocs:
  // getDocContent:
});

