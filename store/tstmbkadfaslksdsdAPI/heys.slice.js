import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hey_list = createAsyncThunk(
  "heys/api_v1_hey_list",
  async payload => {
    const response = await apiService.api_v1_hey_list(payload)
    return response.data
  }
)
export const api_v1_hey_create = createAsyncThunk(
  "heys/api_v1_hey_create",
  async payload => {
    const response = await apiService.api_v1_hey_create(payload)
    return response.data
  }
)
export const api_v1_hey_retrieve = createAsyncThunk(
  "heys/api_v1_hey_retrieve",
  async payload => {
    const response = await apiService.api_v1_hey_retrieve(payload)
    return response.data
  }
)
export const api_v1_hey_update = createAsyncThunk(
  "heys/api_v1_hey_update",
  async payload => {
    const response = await apiService.api_v1_hey_update(payload)
    return response.data
  }
)
export const api_v1_hey_partial_update = createAsyncThunk(
  "heys/api_v1_hey_partial_update",
  async payload => {
    const response = await apiService.api_v1_hey_partial_update(payload)
    return response.data
  }
)
export const api_v1_hey_destroy = createAsyncThunk(
  "heys/api_v1_hey_destroy",
  async payload => {
    const response = await apiService.api_v1_hey_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const heysSlice = createSlice({
  name: "heys",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_hey_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hey_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hey_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_hey_list,
  api_v1_hey_create,
  api_v1_hey_retrieve,
  api_v1_hey_update,
  api_v1_hey_partial_update,
  api_v1_hey_destroy,
  slice: heysSlice
}
