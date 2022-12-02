import { LoadingSpinner } from 'public/svgs'
import styles from './loading.module.scss'

const Loading = () => (
  <div className={styles.loading}>
    <LoadingSpinner />
  </div>
)

export default Loading
