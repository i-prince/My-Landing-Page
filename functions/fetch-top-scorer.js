exports.handler = async (event, context) => {
    const data = require('./https://spectacular-lebkuchen-7b3879.netlify.app/db.json');
    const topScorer = data.top_scorer;
  
    return {
      statusCode: 200,
      body: JSON.stringify(topScorer)
    };
  };
  