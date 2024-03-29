import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = "https://66073a5abe53febb857f56bf.mockapi.io"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/Contacts");
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)  
    }
    }
)

