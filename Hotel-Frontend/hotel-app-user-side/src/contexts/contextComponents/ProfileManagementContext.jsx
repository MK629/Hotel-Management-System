const { createContext } = require("react");

export const ProfileManagementContext = createContext({ 
    validationStep: () => {}, 
    editingStep: () => {},
    changeUsername: () => {},
    changePassword: () => {},
    cleanUp : () => {}
})