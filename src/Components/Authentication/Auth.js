export const isAuthenticated = () => {
    return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
    localStorage.setItem("isLoggedIn", "true");
};

export const logout = () => {
    localStorage.removeItem("isLoggedIn");
};
export const companyisAuthenticated = () => {
    return localStorage.getItem("companyisLoggedIn") === "true";
};

export const companylogin = () => {
    localStorage.setItem("companyisLoggedIn", "true");
};

export const companylogout = () => {
    localStorage.removeItem("companyisLoggedIn");
};
