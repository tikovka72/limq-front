import {useTypedSelector} from "../hooks/useTypedSelector";
import {ChannelCard} from "./channelCard";
import {CreateChannelCard} from "./createChannelCard";

export function RegisterBody() {
    const {channels} = useTypedSelector(state => state.channels)

    return (
        <div>
            <h1 className='header-1'>Channels</h1>
            <div className='card-container'>
                {channels.map(channel => <ChannelCard key={channel.channel_id} channel={channel}/>)}
                <CreateChannelCard/>
            </div>
        </div>
    )
}