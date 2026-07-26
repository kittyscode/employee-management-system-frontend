

const StartCard = ({ icon ,title,value,growth}) => {
  return (
    <div className="start-card">
        <div   className="start-icon">
             {icon}
        </div>

        <div className="start-content">
            <h4>{title}</h4>
            <h2>{value}</h2>
            
            <p>{growth}</p>
        </div>
         </div>
  )
}

export default StartCard