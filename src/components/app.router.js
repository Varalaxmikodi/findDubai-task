import { Route, Routes } from "react-router-dom";
import { RestuarentComponent } from "./restuarent/restuarent.component";
import { SignInComponent } from "./signIn/signIn.component";
import { Frontpage } from "./fronpage/frontpage.component";
import { EducationComponent } from "./education/education.component";
import { MyAccountComponent } from "./myAccount/myAccount.component";
import { ProvideServicesComponent } from "./provideServices/provideServices.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { BeautyComponent } from "./beauty/beauty.component";
import { MoversComponent } from "./movers/movers.component";
import { ContraComponent } from "./contra/contra.component";
import { AccomadationComponent } from "./Accomadation/accomadation.component";
import { AhaCommponent } from "./aha/aha.component";
import { FoodComponent } from "./food/food.component";
import { CoursesComponent } from "./courses/courses.component";




export function AppRouter() {
    return (
        <Routes>

            <Route path="/" element={<Frontpage></Frontpage>}></Route>
            <Route path="/sign" element={<NavigateSignInComponent></NavigateSignInComponent>}></Route>
            <Route path="/education" element={<NavigateEducation></NavigateEducation>}></Route>
            <Route path="/abhi" element={<NavigateRestaurent></NavigateRestaurent>}></Route>
            <Route path="/myAccount" element={<NavigateMyAccount></NavigateMyAccount>}></Route>
            <Route path="/provide" element={<NavigateProvideServices></NavigateProvideServices>}></Route>
            <Route path="/wishlist" element={<NavigationWishlist></NavigationWishlist>}></Route>
            <Route path="/beauty" element={<NavigateBeauty></NavigateBeauty>}></Route>
            <Route path="/movers" element={<NavigateMovers></NavigateMovers>}></Route>
            <Route path="/contra" element={<NavigateContra></NavigateContra>}></Route>
            <Route path="/accomadation" element={<NavigateAccomadation></NavigateAccomadation>}></Route>
            <Route path="/food" element={<NavigateFood></NavigateFood>}></Route>
            <Route path="/aha" element={<NavigateAha></NavigateAha>}></Route>
            <Route path="/courses" element={<NavigateCourses></NavigateCourses>}></Route>
        </Routes>

    )
}

function NavigateRestaurent() {
    return (


        <div>
            <RestuarentComponent></RestuarentComponent>
        </div>
    )
}
function NavigateSignInComponent() {
    return (
        <SignInComponent></SignInComponent>
    )
}
function NavigateEducation() {
    return (
        <div>
            <EducationComponent></EducationComponent>
        </div>
    )
}
function NavigateMyAccount() {
    return (
        <MyAccountComponent></MyAccountComponent>
    )
}
function NavigateProvideServices() {
    return (
        <ProvideServicesComponent></ProvideServicesComponent>
    )
}
function NavigationWishlist() {
    return (
        <WishlistComponent></WishlistComponent>
    )
}
function NavigateBeauty() {
    return (
        <BeautyComponent></BeautyComponent>
    )

}
function NavigateMovers() {
    return (
        <MoversComponent></MoversComponent>
    )
}
function NavigateContra() {
    return (
        <ContraComponent></ContraComponent>
    )
}
function NavigateAccomadation() {
    return (
        <AccomadationComponent></AccomadationComponent>
    )
}
function NavigateAha(){
    return(
        <AhaCommponent></AhaCommponent>
    )
}

function NavigateFood(){
    return(
        <FoodComponent></FoodComponent>
    )

}
function NavigateCourses(){
    return(
        <CoursesComponent></CoursesComponent>
    )
}