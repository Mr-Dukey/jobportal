import Cookies from "js-cookie";

/* user Login */
export const isAuthenticated = () => {
    return Cookies.get("isUserLoggedIn")
    // return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
    Cookies.set('isUserLoggedIn',true);
    
    // localStorage.setItem("isLoggedIn", "true");
};

export const logout = () => {
    Cookies.remove('isUserLoggedIn');
    // localStorage.removeItem("isLoggedIn");
};

/* Company Login */
export const companyisAuthenticated = () => {
    return Cookies.get("isCompanyLoggedIn");
    // return localStorage.getItem("companyisLoggedIn") === "true";
};

export const companylogin = () => {
    Cookies.set('isCompanyLoggedIn',true);
    // localStorage.setItem("companyisLoggedIn", "true");
};

export const companylogout = () => {
    Cookies.remove('isCompanyLoggedIn');
    // localStorage.removeItem("companyisLoggedIn");
};
