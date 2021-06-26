import { Badge, Typography } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function NotificationBadge({ count }) {
  return (
    <div style={{ display: "flex", width: "fit-content", padding: "4px" }}>
      <Typography variant="caption">
        You have {count} new notification
      </Typography>
      <Badge color="secondary" variant="dot">
        <NotificationsIcon />
      </Badge>
    </div>
  );
}
