import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import '../styles/Accordion.css'

export default function Accordion(props) {

const [isActive, setIsActive] = useState(false)

  return (
    <article className="accordion__item">
        <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
            <div aria-expanded={isActive}>{props.title}</div>
            <div className="accordion__icon">{isActive ? <KeyboardArrowDownIcon style={{ fontSize: 45 }}/> : <KeyboardArrowUpIcon style={{ fontSize: 45 }} />}</div>
        </div>
        {isActive && <div className="accordion__content" aria-expanded={!isActive}>{props.content}</div>}
     </article>
  )
}
