import classes from './meetup.module.css';
import {MongoClient} from 'mongodb';

const MeetupDetail = (props) => {
    console.log(props)
    return(
        <section className={classes.detail}>
            <img src={props.meetups.image}/>
            <h1>{props.meetups.title}</h1>
            <address>{props.meetups.address}</address>
            <p>{props.meetups.description}</p>
        </section>
    )
}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect('mongodb+srv://inderpreet:KyCgQ8GITqICdH1x@cluster0.kv1cwcj.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupCollection = db.collection('meetups')

    // this find criteria will return only id fields.
    const result = await meetupCollection.find({},{_id:1}).toArray();
    

    client.close();

    return{
        fallback:'blocking',
        paths: result.map(data => {
            return(
                {params:{meetupId:data._id.toString()}}
            )
        })
        /* [
            {params:{meetupId:'m1'}},
            {params:{meetupId:'m2'}}
        ] */
    }
}
export const getStaticProps = async (context) => {
    let meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://inderpreet:KyCgQ8GITqICdH1x@cluster0.kv1cwcj.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupCollection = db.collection('meetups')

    const result = await meetupCollection.find().toArray();
    
    const resultWithID = result.map((data) => {
        return{
            title:data.title,
            address:data.address,
            image:data.image,
            id:data._id.toString(),
        }
    });

    const resultID = resultWithID .find((data) => {
        return data.id === meetupId;
    });

    client.close();

    return{
        props:{
            meetups:resultID
        }
    }
}



export default MeetupDetail;