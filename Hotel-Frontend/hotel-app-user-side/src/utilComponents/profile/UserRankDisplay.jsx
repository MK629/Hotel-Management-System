import React from 'react'

const UserRankDisplay = ({rank}) => {

  const getRankColour = (rank) => {
    switch(rank){
        case 'Bronze': return "bg-[#CD7F32] text-[#EAE0D2]";
        case 'Silver': return "bg-[#C0C0C0]";
        case 'Gold': return "bg-[#FFD700]";
        case 'Platinum': return "bg-[#E5E4E2]";
        default: return "bg-[#CD7F32]"
    }
  }  

  return (
    <div className='px-2'>
        <div className={`${getRankColour(rank)} px-2 rounded-md`}>
            {rank}
        </div>
    </div>
  )
}

export default UserRankDisplay