import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {id:'m1', title:'first meetup', image:'https://thetourguy.com/wp-content/uploads/2019/06/Paris-in-a-Day-780x420.jpg', address:'123 Paris PO box:123455', description: 'This is first meetup'},
    {id:'m2', title:'second meetup', image:'https://thetourguy.com/wp-content/uploads/2019/06/Paris-in-a-Day-780x420.jpg', address:'123 Japan PO box:123455', description: 'This is second meetup'}
];
const HomePage = (props) => {
    return (
        <MeetupList meetups= {props.meetups}/>
    )
}

// STATIC GENERATION
export const getStaticProps = async () => {
    return{
        props:{
            meetups:DUMMY_DATA
        }
    }
    
}

export default HomePage;