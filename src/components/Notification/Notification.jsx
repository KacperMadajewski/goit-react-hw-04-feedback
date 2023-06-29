import Styles from './Notifications.module.css';
import { Statistics } from 'components/Statistics/Statistics';

export default function Notification() {
  const visibility = () => {
    if (Statistics.total === 0) {
      return Styles.visibile;
    } else {
      return Styles.hidden;
    }
  };

  return (
    <div className={visibility()}>
      <h4 className={Styles.message}>There is no feedback</h4>
    </div>
  );
}
