import React from 'react'

const PersonalInfo = () => {
   const perInfo = `Asha Bhosle has won seven Filmfare Awards for Best Female Playback Singer out of 18 nominations. 
    She won her first two awards in 1967 and 1968. After receiving the award in 1979, she requested 
    that her name not be considered for nominations to promote new talent. She was later honored with 
    the Filmfare Lifetime Achievement Award in 2001.`

  return (
    <div className="py-4">
        <h3 className="text-primary border-start border-4 border-primary ps-3 mb-4 fw-bold">Personal Legacy</h3>
        <p className="lead text-secondary lh-lg" style={{textAlign: 'justify'}}>{perInfo}</p>
    </div>
  )
}

export default PersonalInfo