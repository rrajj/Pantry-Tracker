'use client' 
import {Box, Stack, Typography} from "@mui/material"
import { fire_store } from "@/firebase"
import {collection} from "firebase/firestore" 
import { useEffect } from "react"

const items = [
"tomato",
"potato",
"onion",
"garlic",
"carrot",
"cabbage",
"cauliflower",
"pineapple",
"watermelon",
"bell peppers",
"green peppers"
]

export default function Home() {

  useEffect(() => {
    const items = collection(fire_store, "pantry")
    console.log(items)
  }, [])

  return (
  <Box 
    width="100vw"
    height="100vh"
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
    
  >
    <Box border={"1px solid #333"}>
    <Box
      width="800px"
      height="100px"
      bgcolor={"#CF9FFF"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      
    >
      <Typography
        variant={"h2"} color={"333"} textAlign={"center"}
      >
        Pantry Items
      </Typography>
    </Box>
    <Stack 
      width="800px"
      height="300px"
      spacing={2}
      overflow={"auto"}
    >
      {items.map((i) => 
        <Box
          key={i}
          width="50%"
          height="100px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
          bgcolor={"#f0f0f2"}
        >
          <Typography variant="h3" color={"#333"} textAlign={"center"}>
            {/* to capitalize first letter */}
            {
            i.charAt(0).toUpperCase() + i.slice(1)
            }
          </Typography>
          {/* {i} */}
        </Box>
      )}
    </Stack>
    </Box>
  </Box>
  )
}
