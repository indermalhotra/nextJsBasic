import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head'
import { Fragment } from "react";


const HomePage = (props) => {
    console.log(props);
    return (
        <Fragment>
            <Head>
                <title>First Page</title>
                <meta name="hello" content="hello ji"></meta>
            </Head>
            <MeetupList meetups= {props.meetups}/>
        </Fragment>
    )
}

// STATIC GENERATION
export const getStaticProps = async () => {

    const client = await MongoClient.connect('mongodb+srv://inderpreet:KyCgQ8GITqICdH1x@cluster0.kv1cwcj.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupCollection = db.collection('meetups')

    const result = await meetupCollection.find().toArray();

    client.close();

    return{
        props:{
            meetups:result.map((data) => {
                return{
                    title:data.title,
                    address:data.address,
                    image:data.image,
                    id:data._id.toString(),
                }
            })
        }
    }
    
}

export default HomePage;