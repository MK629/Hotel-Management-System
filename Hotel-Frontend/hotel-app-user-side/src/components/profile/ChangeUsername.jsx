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
      <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl'>
        <form onSubmit={(e) => {e.preventDefault(); setNewUsername(e.target)}} className='flex-col'>
          <div>
            <input id='newUsername' name='newUsername' type="text" className='bg-[#EAE0D2]'/>
          </div>

          <div className='flex'>
            <button type='submit'>Submit</button>
            <div onClick={() => {cleanUp()}}>Cancel</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangeUsername