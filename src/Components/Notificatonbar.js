import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar, IconButton } from '@material-ui/core';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Notificatonbar(props) {

    const { setTheme, mode } = props;


    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme(e.target.checked);
        }
        else {
            setTheme(false);
        }
    }
    return (
        <div
            style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: 230 }}
        >
            <FormControlLabel
                control={
                    <Checkbox
                        checked={mode}
                        icon={<Brightness7Icon />}
                        checkedIcon={<Brightness4Icon />}
                        onChange={(e) => handleTheme(e)}
                        color="white"
                    />
                }

                label={mode ? "Dark" : "Light"}
            />
            <IconButton>
                <VideoCallIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar
                src="https://yt3.ggpht.com/yti/ANoDKi53PianwBRwYToRk-mJBendZmpxdUlv4rqbdL-mmA=s88-c-k-c0x00ffffff-no-rj-mo"
            />
        </div>
    )
}

export default Notificatonbar
