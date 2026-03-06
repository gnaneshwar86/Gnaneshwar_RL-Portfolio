import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-[#111111] text-white py-12">
            <div className="container mx-auto px-4 max-w-[1100px] flex flex-col items-center justify-center min-h-[160px] text-center">
                <a
                    href="mailto:gnaneshwarnani8605@gmail.com"
                    className="text-[0.8rem] hover:opacity-60 transition-opacity text-white"
                >
                    gnaneshwarnani8605@gmail.com
                </a>

                {/* Social links */}
                <div className="flex justify-center items-center my-4 space-x-8">
                    <a href="https://linkedin.com/in/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                        <img src="/assets/linkedin-icon.svg" alt="Linkedin" className="w-[30px] h-[30px]" />
                    </a>
                    <a href="https://github.com/gnaneshwar86" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                        <img src="/assets/github-icon.svg" alt="GitHub" className="w-[30px] h-[30px]" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                        <img src="/assets/twitter-icon.svg" alt="Twitter" className="w-[30px] h-[30px]" />
                    </a>
                </div>

                <p className="text-[0.8rem] mt-2 text-white">
                    Copyright &copy; gnaneshwar {2026}, All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
