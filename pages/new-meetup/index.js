import NewMeetupForm from '../../components/meetups/NewMeetupForm';


const newMeetup = () => {
    const addMeetupHandler = async meetupData => {
        console.log(meetupData);

        // api path with file name without js extension
        const response = await fetch('/api/new-meetup', {
            method:'POST',
            body: JSON.stringify(meetupData),
            header: {
                'Content-Type' : 'application/json'
            }
        });

        const result = await response.json();

        console.log(result);
    }

    return(
        <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    )
}

export default newMeetup;