exports.handler = async (event, context) => {
    const data = require('./https://spectacular-lebkuchen-7b3879.netlify.app/db.json');
    const promisingTalent = data.promising_talent;
  
    return {
      statusCode: 200,
      body: JSON.stringify(promisingTalent)
    };
  };