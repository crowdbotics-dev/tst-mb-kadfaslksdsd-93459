import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_lee_list = createAsyncThunk(
  "lees/api_v1_lee_list",
  async payload => {
    const response = await apiService.api_v1_lee_list(payload)
    return response.data
  }
)
export const api_v1_lee_create = createAsyncThunk(
  "lees/api_v1_lee_create",
  async payload => {
    const response = await apiService.api_v1_lee_create(payload)
    return response.data
  }
)
export const api_v1_lee_retrieve = createAsyncThunk(
  "lees/api_v1_lee_retrieve",
  async payload => {
    const response = await apiService.api_v1_lee_retrieve(payload)
    return response.data
  }
)
export const api_v1_lee_update = createAsyncThunk(
  "lees/api_v1_lee_update",
  async payload => {
    const response = await apiService.api_v1_lee_update(payload)
    return response.data
  }
)
export const api_v1_lee_partial_update = createAsyncThunk(
  "lees/api_v1_lee_partial_update",
  async payload => {
    const response = await apiService.api_v1_lee_partial_update(payload)
    return response.data
  }
)
export const api_v1_lee_destroy = createAsyncThunk(
  "lees/api_v1_lee_destroy",
  async payload => {
    const response = await apiService.api_v1_lee_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const leesSlice = createSlice({
  name: "lees",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_lee_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_lee_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_lee_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_lee_list,
  api_v1_lee_create,
  api_v1_lee_retrieve,
  api_v1_lee_update,
  api_v1_lee_partial_update,
  api_v1_lee_destroy,
  slice: leesSlice
}
