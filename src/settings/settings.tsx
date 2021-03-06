import {SettingsBlock} from "../elements/menu/settingsBlock";
import {useSettings} from "../hooks/elementHooks/useSettings";




export function MainSettings() {
    const {tabs, currentTab} = useSettings()

    return (
        <div className='settings-without-menu'>
            <SettingsBlock currentTab={currentTab} tabs={tabs}/>
        </div>
    )
}
