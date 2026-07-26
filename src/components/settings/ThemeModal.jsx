import "../../styles/ThemeModal.css";


const ThemeModal = ({open,onClose}) => {


    if(!open) return null;



    const changeTheme = (theme)=>{


        localStorage.setItem(
            "theme",
            theme
        );


        applyTheme(theme);


    };



    const applyTheme = (theme)=>{


        if(theme === "system"){


            const darkMode =
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;



            document.documentElement.setAttribute(
                "data-theme",
                darkMode ? "dark":"light"
            );


        }
        else{


            document.documentElement.setAttribute(
                "data-theme",
                theme
            );


        }


    };




    return (

        <div className="theme-overlay">


            <div className="theme-modal">


                <h2>
                    Customize Theme
                </h2>



                <div className="theme-options">


                    <div
                    className="theme-option"
                    onClick={()=>changeTheme("light")}
                    >

                        ☀️

                        <span>
                            Light
                        </span>

                    </div>



                    <div
                    className="theme-option"
                    onClick={()=>changeTheme("dark")}
                    >

                        🌙

                        <span>
                            Dark
                        </span>

                    </div>




                    <div
                    className="theme-option"
                    onClick={()=>changeTheme("system")}
                    >

                        💻

                        <span>
                            System
                        </span>

                    </div>



                </div>



                <button
                className="theme-close"
                onClick={onClose}
                >

                    Close

                </button>



            </div>


        </div>

    );

};


export default ThemeModal;