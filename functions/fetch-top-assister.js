exports.handler = async (event, context) => {
    const data = require('./https://spectacular-lebkuchen-7b3879.netlify.app/db.json');
    const topAssister = data.top_assister;
  
    return {
      statusCode: 200,
      body: JSON.stringify(topAssister)
    };
  };
  