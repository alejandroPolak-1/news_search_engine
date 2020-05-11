import React from 'react'
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'

const Form = () => {

 //use own custom hook
 const [category, SelectNews] = useSelect();

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Find news by categories</h2>

          <SelectNews/>

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
