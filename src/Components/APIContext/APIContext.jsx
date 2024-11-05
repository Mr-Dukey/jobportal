import React, { createContext, useContext } from 'react'
const apiContext = createContext();
export default function APIContext({ children }) {

    const jobAPI = 'http://localhost:2400/job';
    const companyAPI = 'http://localhost:2400/company';
    const userAPI = 'http://localhost:2400/user';
    return (
        <div>
            <apiContext.Provider value={{ jobAPI, companyAPI, userAPI }}>
                {children}
            </apiContext.Provider>
        </div>
    )
}

export function JobCustomizationAPI(){
    const api = useContext(apiContext);
    return api.jobAPI;
}

export function CompanyCustomizationAPI(){
    const api = useContext(apiContext);
    return api.companyAPI;
}

export function UserCustomizationAPI(){
    const api = useContext(apiContext);
    return api.userAPI;
}