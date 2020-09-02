import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { countryTag } = req.query;

    let doc = {}

    if(countryTag){
        doc = await req.db.collection('Countries').findOne({countryTag: countryTag})
    }

    else {
        doc = await req.db.collection('Countries').findOne()
    }

    res.json(doc);
});

export default handler;