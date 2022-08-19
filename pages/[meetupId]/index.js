import classes from './meetup.module.css';

const MeetupDetail = (props) => {
    console.log(props)
    return(
        <section className={classes.detail}>
            <img src={props.meetupData.image}/>
            <h1>{props.meetupData.title}</h1>
            <address>{props.meetupData.address}</address>
            <p>{props.meetupData.description}</p>
        </section>
    )
}



export const getStaticPaths = () => {
    return{
        fallback:false,
        paths:[
            {params:{meetupId:'m1'}},
            {params:{meetupId:'m2'}}
        ]
    }
}
export const getStaticProps = (context) => {
    let meetupId = context.params.meetupId;
    return{
        props:{
            meetupData:{
                id:meetupId,
                image:'https://thetourguy.com/wp-content/uploads/2019/06/Paris-in-a-Day-780x420.jpg',
                title: 'Meetup heading',
                address:'123 dummy address',
                description:'Meetup Description'
            }
        }
    }
}



export default MeetupDetail;