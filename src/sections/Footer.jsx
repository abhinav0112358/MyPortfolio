const Footer = () => {
    return (
        <footer
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">

                <a href={'https://github.com/abhinav0112358/MyPortfolio.git'}>
                    <div className="social-icon">
                        <img
                            src="/assets/github.svg"
                            alt="github"
                            className="w-1/2 h-1/2"/>
                    </div>
                </a>


                <a href={'https://www.linkedin.com/in/abhinav-a97740222?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_mynetwork.discover-hub.index%3BqUwuaV4oTKS05uA4kbX6kA%3D%3D'}>
                    <div className="social-icon">
                        <img src="/assets/linkedin.svg" alt="Linkedin" className="w-1/2 h-1/2"/>
                    </div>

                 </a>
            </div>

    <p className="text-white-500">© 2024 Abhinav.</p>
</footer>
)
    ;
};

export default Footer;