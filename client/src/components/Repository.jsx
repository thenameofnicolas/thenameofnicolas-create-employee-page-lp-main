import { useQuery } from '@tanstack/react-query'
import { Text, HStack, VStack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

const URLServer = "http://localhost:3030";


export const useEmployeeData = (id) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
        const response = await fetch(`${URLServer}/employees/${id}`);
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok')
        }
        return response.json()
    }})
     
  if (error) console.log('An error has occurred: ' + error.message );
  return Display(data, isLoading);
}


const DisplayFullName = ({firstName, lastName}) => {
  return(
    <HStack align="baseline" justify="space-between" gap="0.8em">
          {<Text fontSize='5xl' >{firstName}</Text>}
          {<Text fontSize='3xl'>{lastName}</Text>}
    </HStack>
  );
}

const DisplayOccupation= ({jobTitle, teamName}) => {
  return(
    <HStack align="baseline" justify="space-between" >
          {<Text fontSize='2xl'>{jobTitle}</Text>}
           <Text fontSize='2xl'>{jobTitle ? "|" : "" }</Text> 
          {<Text fontSize='1xl'>{teamName}</Text>}
    </HStack>
  );
}

const DisplayEmployeeSheet=(data) => {
  return(
    <>
    <Image
    boxSize='175px'
    objectFit='cover'
    src={data ? URLServer + "/" + data.imageFilePath : "Na" }
    fallbackSrc='https://via.placeholder.com/175'
    alt={data ? data.firstName + " " + data.lastName + " picture" : "Unknow" }
    />

    <VStack align="baseline">
      <DisplayFullName {...data} />
      <DisplayOccupation {...data}  />
    </VStack>
    </>
  );
}

 const Display = (data, isLoading) => {
  return (
    <>
    <HStack
      direction="row"
      justify="center"
      align="center"
      spacing={8}
      boxShadow="md"
      p={2}
      w="100vw"
    >

      {isLoading 
      ? <Text fontSize='6xl' >Loading..</Text> 
      : <DisplayEmployeeSheet {...data} /> }
  
    </HStack>
    </>
  );
}