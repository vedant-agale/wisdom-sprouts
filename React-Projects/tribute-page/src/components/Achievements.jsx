import React from 'react'
//import './Achievements.css'

const Achievements = ({Honours}) => {
  return (
    <div className="my-4">
        <h3 className="text-primary border-start border-4 border-primary ps-3 mb-4 fw-bold">Honours & Recognition</h3>
        <ul className="list-group list-group-flush">
            {Honours.map((str, index) => (
                <li className="list-group-item py-3 achievementList border-0 mb-2 rounded shadow-sm" key={index}>
                    <i className="fas fa-medal text-warning me-3"></i> {str}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Achievements