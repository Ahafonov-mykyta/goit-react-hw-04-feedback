import propTypes from "prop-types";

export default function Notification({message}){

return <p className="notification">{message}</p>
}

Notification.propTypes = {
    message: propTypes.string.isRequired
}