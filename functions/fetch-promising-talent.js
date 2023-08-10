const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    try {
        const response = await fetch('https://spectacular-lebkuchen-7b3879.netlify.app/db.json');
        const data = await response.json();
        const promisingTalent = data.promising_talent;

        return {
            statusCode: 200,
            body: JSON.stringify(promisingTalent)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
