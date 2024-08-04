'use client' 
import {Box, Stack, Typography, Modal, TextField, Button} from "@mui/material"
import { fireStore } from "@/firebase"
import {collection, getDocs, query, doc, getDoc, setDoc, deleteDoc} from "firebase/firestore" 
import { useEffect, useState } from "react"
import { setConfig } from "next/config"


export default function Home() {

  const [pantry, setPantry] = useState([])
  const [open, setOpen] = useState(false)          // default value is false
  const [itemName, setItemName] = useState('')  // default value is empty string

  const updatePantry = async() => {
    const snapshot = query(collection(fireStore, 'pantry'))
    const docs = await getDocs(snapshot)    
    const pantryList = []
    docs.forEach((doc) => {
      pantryList.push({
        name: doc.id,
        ...doc.data()
      })
    })
    setPantry(pantryList)
  }

  const addItem = async(item) => {
    const item_ = item.toLowerCase()
    const docRef = doc(collection(fireStore, 'pantry'), item_)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, {quantity: quantity + 1})
    }
    else {
      await setDoc(docRef, {quantity: 1})
    }
    await updatePantry()
  }

  const removeItem = async(item) => {
    const item_ = item.toLowerCase()
    const docRef = doc(collection(fireStore, 'pantry'), item_)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1){
        await deleteDoc(docRef)
      }
      else{
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }
    await updatePantry()
  }

  useEffect(() => {
    updatePantry()
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box 
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}  // center it horizontally
      alignItems={"center"}     // center it vertically
      flexDirection={"column"}
      gap={2}
    > 
      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor={"white"}
          border={"2px solid black"}
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection={"column"}
          gap={3}
          sx={{
            transform:"translate(-50%, -50%)"
          }}
        >
          <Typography variant="h6">Add Item</Typography>
          <Stack 
            width="100%"
            direction={"row"}
            spacing={2}
            overflow={"auto"}
          >
            <TextField
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e)=>
                setItemName(e.target.value)
              }
            />
            <Button 
              variant="outlined"
              onClick={()=>{
                addItem(itemName)
                setItemName('')
                handleClose( )
              }}
            >
              Add
            </Button>            
          </Stack>
        </Box>
      </Modal>
      {/* <Typography variant="h1"> Pantry Tracker </Typography> */}
      <Button
        variant="contained"
        onClick={() => {
          handleOpen()
        }}
      >
        Add New Item
      </Button>

      <Box border="1px solid #333" >
        <Box
          width={"800px"}
          height={"100px"}
          display="flex"
          bgcolor={"#add8e6"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h2" color="#333">
            Pantry Items
          </Typography>
        </Box>
      
      <Stack
        width="800px"
        height="300px"
        spacing={2}
        overflow="auto"
      >
        {
          pantry.map(({name, quantity})=>(
            <Box 
              key={name} 
              width="100%"
              minHeight={"150px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              // alignSelf={"center"}
              bgcolor="#f0f0f0"
              padding={5}
            >
              <Typography variant="h3" color="#333" textAlign={"center"}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Typography>
              <Typography variant="h3" color="#333" textAlign={"center"}>
                {quantity}
              </Typography>
              <Button variant="contained"
                onClick={()=> {
                  addItem(name)
                }}
              >
                Add
              </Button>
              <Button variant="contained"
                onClick={()=> {
                  removeItem(name)
                }}
              >
                Remove
              </Button>
            </Box>
          ))
        }
      </Stack>
      </Box>
    </Box>
  )
}
