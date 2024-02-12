import LandingPage from "../Components/LandingPage";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/signIn";
import Home from "../Components/Home"
import Authenticate from "../Components/Authenticate"
import CreateUrl from "../Components/CreateUrl";
import AllLinks from "../Components/AllLinks";
import ResetPassword from "../Components/ResetPassword";
import ResetForm from "../Components/ResetForm";
import ThankYou from "../Components/ThankYou";



const AppRoutes=[
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/thankYou",
        element:<ThankYou/>
    },
    {
        path:"/signUp",
        element:<SignUp/>
    },
    {
        path:"/signIn",
        element:<SignIn/>
    },
    {
        path:"/home/:name",
        element:<Home/>,
        children:[
        {
            path:"createUrl",
            element:<CreateUrl/>
        },
        {
            path:"AllLinks",
            element:<AllLinks/>
        }
    ],
    },
    {
        path:"/authenticate/:id",
        element:<Authenticate/>
    },
    {
        path:"/resetPassword",
        element:<ResetPassword/>
    },
    {

        path:"/resetPassword/:token/:email",
        element:<ResetForm/>
    },

]

export default AppRoutes