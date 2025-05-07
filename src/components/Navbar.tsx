/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-html-link-for-pages */
import ButtonHref from "./ButtonHref";
const Navbar = () => {
    return (
        <div className="w-[90%] my-4 mx-auto md:w-[70%]">
            {/* buat div */}
            <nav className="flex items-center justify-between">
                <div className="md:text-logo text-3xl font-bold"><a className="decoration-0 text-primary hover:text-primary-hover transition-all ease-in-out duration-300" href="/">BiasaKeun</a></div>

                <div className="profile">

                    <ButtonHref href="/login" children="Login" />
                </div>
            </nav>


        </div>
    )
}

export default Navbar;