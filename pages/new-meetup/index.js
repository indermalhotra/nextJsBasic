import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetup = () => {
    const addMeetupHandler = meetupData => {
        console.log(meetupData);
    }

    return(
        <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    )
}

export default newMeetup;