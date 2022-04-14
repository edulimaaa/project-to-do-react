import Contents from '../../forms/Contents';
import SubItems from '../../project/ProjectSubItems';
import styles from './SideBar.module.css'

function SideBar() {
  return (
    <div className={styles.side}>
      <h2>Tarefas</h2>
      <ul>
        <Contents />
      </ul>
      
    </div>
  );
}

export default SideBar;
