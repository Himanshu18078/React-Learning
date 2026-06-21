import styles from './Container.module.css'
const Contianer = ({children}) => {
  return <>
  <div className= {`${styles.container}`}>{children}</div>
  </>
}
export default Contianer;