import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
    items: [],
    loading: false,
    error: null
    },
    extraReducers: (builder) => 
        builder
            .addCase(fetchContacts.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }).addCase(addContact.pending, (state) => {
            state.error = false;
            state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state) => {
                state.loading = false;
                state.error = true;
            }),
    reducers: {
        addContacts(state, action) {
         state.items.push(action.payload);
        },
        deleteContact(state, action) {
         state.items = state.items.filter((contact) => contact.id !== action.payload);
        }
    }
});

export const {deleteContact, addContacts} = slice.actions;
export default slice.reducer;
export const selectContacts = (state) => state.contacts.items;