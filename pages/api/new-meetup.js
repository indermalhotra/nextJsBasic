
import {MongoClient} from 'mongodb'

const handler = async(req,res) => {
    if(req.method === 'POST'){
        const data = req.body;

       // const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://inderpreet:KyCgQ8GITqICdH1x@cluster0.kv1cwcj.mongodb.net/meetups?retryWrites=true&w=majority');

        const db = client.db();
        
        // meetup can be any name
        const meetupCollection = db.collection('meetups') 

        // data that we recive from req function parameter this is also async process so we added await
        const result = await meetupCollection.insertOne(JSON.parse(data)); 

        console.log(result);

        client.close();

        // We need to use this response object to send back a response
        res.status(201).json({message:'Meetup inserted'}) 

    }
}

export default handler;

