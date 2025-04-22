import { ProfileEditNoticeContext } from '@/contexts/contextComponents/ProfileEditNoticeContext'
import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import { getLoggedInUser, saveLoggedInUser, saveToken, tempGetPassword } from '@/services/credentialsService'
import { changeUsername } from '@/services/hotelUserService'
import React, { useContext } from 'react'

const ChangeUsername = () => {

  const {cleanUp} = useContext(ProfileManagementContext)
  const {notifyProfileChange} = useContext(ProfileEditNoticeContext)

  async function setNewUsername(e) {
    
    const changeUsernameForm = {
      currentUsernameOrEmail: await getLoggedInUser(),
      currentPassword: window.btoa(await tempGetPassword()),
      newUsername: e.newUsername.value
    }

    let response

    await changeUsername(changeUsernameForm).then(res => {response = res.data}).catch(e => {window.alert(e.response.data)})

    if(response && response === 'success'){
      await saveLoggedInUser(e.newUsername.value)
      await saveToken('Basic ' + window.btoa(await getLoggedInUser() + ":" + await tempGetPassword()))
      notifyProfileChange()
      cleanUp()
    }

  }


  return (
    <div className='container mx-auto'>
      <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl lg:w-2/5 md:3/5 sm:2/4 mx-auto'>
        <form onSubmit={(e) => {e.preventDefault(); setNewUsername(e.target)}} className='flex-col space-y-3'>
          <h1 className='p-0.5 text-[#2D2D2D] font-bold'>Enter your new username:</h1>

          <div>
            <input id='newUsername' name='newUsername' type="text" className='bg-[#EAE0D2] mx-auto w-full rounded-lg py-1 px-2 focus:outline-none text-[#2D2D2D] font-bold'/>
          </div>

          <div className='flex justify-center space-x-20 p-2'>
            <button className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' type='submit'>
              Submit
            </button>

            <div className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' onClick={() => {cleanUp()}}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangeUsername