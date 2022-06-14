import React from 'react'

export const Hat = () => {
    const strings = ['Тип', "Время", "Сотрудник", "Звонок", "Источник", "Оценка", "Длительность"]
  return (
    <div style={{display: 'flex', margin: "26px 0 0 0", fontSize: '14px', color: '#5E7793', opacity: '0.87'}}>
            <div style={{margin: "0 0  0 40px"}}>{strings[0]}</div>
            <div style={{margin: "0 0  0 30px"}}>{strings[1]}</div>
            <div style={{margin: "0 0  0 48px"}}>{strings[2]}</div>
            <div style={{margin: "0 0  0 60px"}}>{strings[3]}</div>
            <div style={{margin: "0 0  0 281px"}}>{strings[4]}</div>
            <div style={{margin: "0 0  0 154px"}}>{strings[5]}</div>
            <div style={{margin: "0 0  0 414px"}}>{strings[6]}</div>
    </div>
  )
}
