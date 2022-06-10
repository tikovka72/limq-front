import {MixinTypeStates} from "../../../store/reducers/mixinsReducer";
import {useParams} from "react-router-dom";
import {Channel} from "../../../store/reducers/channelsReducer";
import {useActions} from "../../../hooks/useActions";

export function MixinCard(props: { channel: Channel, mixinType: MixinTypeStates }) {
    function deleteMixin() {
        if (channelId && window.confirm('Delete key?')) {
            fetchRestrictMixin(channelId, props.channel['channel_id'], props.mixinType)
        }
    }

    const {channelId} = useParams()
    const {fetchRestrictMixin} = useActions()

    return (
        <div className='card card-100' key={props.channel["channel_id"]}>
            <div className='card-header-container'>
                <div className='card-header'>{props.channel['channel_name']}</div>
            </div>
            <div className='card-info-container'>
                <code className='card-code card-background-text'>{props.channel['channel_id']}</code>
                <button className='button mini-button error' onClick={deleteMixin}>Delete</button>
            </div>
        </div>
    )
}