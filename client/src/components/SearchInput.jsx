import React from "react";

import { Input, InputGroup, InputLeftElement, InputRightElement, IconButton} from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";

import { useSearchParams } from "react-router-dom";


export const SearchInput = ()=> {
    const [searchParams, setSearchParams] = useSearchParams({ q: "" });
    const currentValue = searchParams.get("q");

    function handleChange(event) {
        const value = (event.target.value);
        setSearchParams({ q: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const search = currentValue;
        console.log("Submit %s", search);
    }

    function handleDelete() {
        setSearchParams({ q: "" });
    }

    return (
        <>
        <form style={ {width: '100%'} } onSubmit={handleSubmit}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.500' />}
                    />
                    <Input  style={ {width: '100%'} } 
                    type='text' 
                            placeholder='Search' 
                            value={currentValue}
                            onChange={handleChange}
                            
                    />
                    <InputRightElement >
                        <IconButton icon={<CloseIcon />} 
                                    aria-label='Search employees' 
                                    color='gray.500' 
                                    size='sm' 
                                    onClick={handleDelete} />
                    </InputRightElement>
                </InputGroup>   
        </form>
        </>
        );
 
}