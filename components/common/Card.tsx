import React from 'react'

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div {...props} className="border rounded shadow p-4" >
      {children}
    </div>
  )
}     
export default Card;