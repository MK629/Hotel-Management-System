import { ProfileEditNoticeContext } from '@/contexts/contextComponents/ProfileEditNoticeContext'
import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import { getLoggedInUser, tempGetPassword, tempSavePassword, saveToken} from '@/services/credentialsService'
import { changePassword } from '@/services/hotelUserService'
import React, { useContext } from 'react'

const ChangePassword = () => {

  const {cleanUp} = useContext(ProfileManagementContext) 
  const {notifyProfileChange} = useContext(ProfileEditNoticeContext)

  async function setNewPassword(e){

    const changePasswordForm = {
      currentUsernameOrEmail: await getLoggedInUser(),
      currentPassword: window.btoa(await tempGetPassword()),
      newPassword: window.btoa(e.newPassword.value)
    }

    let response

    await changePassword(changePasswordForm).then(res => {response = res.data}).catch(e => {window.alert(e.response.data)})

    if(response && response === 'success'){
      await tempSavePassword(e.newPassword.value)
      await saveToken('Basic ' + window.btoa(await getLoggedInUser() + ":" + await tempGetPassword()))
      notifyProfileChange()
      cleanUp()
    }
  }

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl'>
        <form onSubmit={(e) => {e.preventDefault(); setNewPassword(e.target)}} className='flex-col'>
          <div>
            <input id='newPassword' name='newPassword' type="text" className='bg-[#EAE0D2]'/>
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

export default ChangePassword