import { Navigate } from "react-router-dom"
// import  Home from "../views/index"
// import  About from "../views/about"
import { lazy,Suspense } from "react"
const Home=lazy(()=> import ("../views/index"));
const About=lazy(()=> import ("../views/about"));
const AsyncComponent=(Component)=>(
    <Suspense fallback={<div>loading</div>}>
       {Component}
    </Suspense>
)
const routes=[{
 path:'/',
 element:<Navigate to="/index"></Navigate>
},
{
    path:'/index',
    element:AsyncComponent(<Home></Home>)
},
{
    path:'/about',
    element:AsyncComponent(<About></About>)
}]
export default routes