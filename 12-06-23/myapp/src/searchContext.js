import React, { createContext, useState } from "react";
const SearchContext=createContext();
export const SearchProvider = ({children}) => {
    const [search,setSearch]=useState("");
    const updateSearch= (value)=>{
        setSearch(value);
    };
    return(
        <SearchContext.Provider value={{search,updateSearch}}>
            {children}
        </SearchContext.Provider>
    );
};
export default SearchContext;

/*

This code is an example of how to create a React context using the createContext function from the React library. Context in React allows you to share data between components without passing props manually through each level of the component tree.
Here's a breakdown of the code:
The code imports the necessary dependencies, including React, createContext, and useState from the React library.
The SearchContext is created using the createContext function. This function returns an object with two components: Provider and Consumer. In this case, we are only using the Provider component.
The SearchProvider component is defined. It is a functional component that takes a children prop. This component will wrap the children components and provide the search context to them.
Inside the SearchProvider component, the useState hook is used to create a state variable called search and a corresponding setter function called setSearch. The initial value of search is an empty string.
The updateSearch function is defined within the SearchProvider component. It takes a value as a parameter and updates the search state using the setSearch setter function.
The SearchProvider component returns the SearchContext.Provider component, which wraps the children components. The Provider component accepts a value prop, which is an object containing the search state and the updateSearch function. This object will be accessible to any components that are children of the SearchProvider.
Finally, the SearchContext object is exported as the default export of the module, allowing other modules to import and use the context.

*/