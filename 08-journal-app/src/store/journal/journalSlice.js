import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        creatingNewNote: (state, action) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNote: (state, action) => {

        }
    }
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote, creatingNewNote } = journalSlice.actions