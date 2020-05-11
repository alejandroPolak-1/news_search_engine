import React from 'react'
import styles from './Form.module.css'
import useSelect from '../hooks/useSelect'

const Form = () => {

//Option for select categories
const OPTIONS = [
    {value:'general', label : 'General'},
    {value:'business', label : 'Business'},
    {value:'technology', label : 'Technology'},
    {value:'health', label : 'Health'},
    {value:'entertainment', label : 'Entertainment'},
    {value:'sports', label : 'Sports'},
    {value:'science', label : 'Science'},
]

 //use own custom hook(for default category general, stateinictial=general--leter other)
 const [category, SelectNews] = useSelect('general', OPTIONS);


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

