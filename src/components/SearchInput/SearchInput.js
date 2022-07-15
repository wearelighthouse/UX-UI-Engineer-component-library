import React from 'react'
import Icon from '../Icon/Icon'
import './searchInput.css'

const Styles = {
    sm: {
      border: 1,
      iconSize: 16,
      fontSize: 14,
      lineHeight: 16,
      paddingV: 4,
      paddingH: 26,
      top: 4
    },
    md: {
      border: 2,
      iconSize: 24,
      fontSize: 18,
      lineHeight: 21,
      paddingV: 8,
      paddingH: 34,
      top: 8
    },
    lg: {
        border: 4,
        iconSize: 32,
        fontSize: 22,
        lineHeight: 28,
        paddingV: 12,
        paddingH: 44,
        top: 12
      }
  }

const SearchInput = ({ placeholder, label, icon, size, width = 250, outline, onChange, ...props}) => {
    const styles = Styles[size];
    const outlined = outline === 'outline' ? 'none' : styles.border + "px" + ' ' + 'solid' + ' ' + 'grey';

    const IconWrapper = () => {
      return (
        <div className="icon-wrapper" style={{width: styles.iconSize + "px", height: styles.iconSize + "px", top: styles.top + "px"}}>
          <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
        </div>
      )
    }

  return (
    <div className={`wrapper wrapper-${outline}`} style={{borderBottom: outlined}}>
      <span className="span">{label}</span>
      {icon && <IconWrapper />}
        <input className={`input-element input-element_${outline}`}
            style={{
              fontSize: styles.fontSize + "px", 
              lineHeight: styles.lineHeight + "px", 
              width: width + "px", 
              paddingTop: styles.paddingV + "px", 
              paddingBottom: styles.paddingV + "px", 
              paddingLeft: icon ? styles.paddingH + "px" : (styles.paddingH - 16) + "px"
            }}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  )
}

export default SearchInput