const fs = require('fs');
const path = require('path');

module.exports = app => {
  app.post('/worker/write_worker', (req, res) => {
    const {json_data, transform_code} = req.body;
    
    const codeText = `
      const json_data = JSON.parse('${JSON.stringify(json_data)}');
      
      ${transform_code}
      
      postMessage(transform(json_data));
    `;
    
    fs.writeFileSync(path.join(__dirname, '..', 'worker_files', 'worker.js'), codeText);
    res.json({message: 'worker successfully written'});
  });
  
  app.get('/worker/worker.js', (req, res) => {
    res.set({'Content-Type': 'text/javascript;charset=UTF-8'});
    res.sendFile(path.join(__dirname, '..', 'worker_files', 'worker.js'));
  });
};

