import EventInfo from "../../../../features/event_info/EventInfo"

export default async function EventInfoPage({ params }){
    const { id } = await params;
    return (
       <EventInfo id = {id}/>
    );
}
