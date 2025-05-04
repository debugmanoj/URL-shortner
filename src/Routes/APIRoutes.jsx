const apiRoutes={
    signUp:{
        path:"/user/addUser",
    },
    signIn:{
        path:"/user/checkUser",
    },
    authenticate:{
        path:"/user/authenticate",
    },
    shortUrl:{
        
        path:"/shorLink/create"
    },
    getAllLinks:{
        
        path:"/shorLink/getAll"
    },
    resetPassword:{
        
        path:"/user/resetPass"
    },
    checkResetPassword:{
        
        path:"/user/checkResetPass"
    },
    updatePassword:{
        
        path:"/user/updatePass"
    }

}

export default apiRoutes