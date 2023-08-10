exports.handler = async (event, context) => {
  try {
      const response = await fetch('https://spectacular-lebkuchen-7b3879.netlify.app/db.json');
      const data = await response.json();
      const topScorer = data.top_scorer;

      return {
          statusCode: 200,
          body: JSON.stringify(topScorer)
      };
  } catch (error) {
      return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Internal Server Error' })
      };
  }
};
