import axios from "axios"
const tstmbkadfaslksdsdAPI = axios.create({
  baseURL: "https://tst-mb-kadfaslksdsd-93459.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstmbkadfaslksdsdAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_hello_list(payload) {
  return tstmbkadfaslksdsdAPI.get(`/api/v1/hello/`)
}
function api_v1_hello_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/api/v1/hello/`, payload)
}
function api_v1_hello_retrieve(payload) {
  return tstmbkadfaslksdsdAPI.get(`/api/v1/hello/${payload.id}/`)
}
function api_v1_hello_update(payload) {
  return tstmbkadfaslksdsdAPI.put(`/api/v1/hello/${payload.id}/`, payload)
}
function api_v1_hello_partial_update(payload) {
  return tstmbkadfaslksdsdAPI.patch(`/api/v1/hello/${payload.id}/`, payload)
}
function api_v1_hello_destroy(payload) {
  return tstmbkadfaslksdsdAPI.delete(`/api/v1/hello/${payload.id}/`)
}
function api_v1_hi_list(payload) {
  return tstmbkadfaslksdsdAPI.get(`/api/v1/hi/`)
}
function api_v1_hi_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/api/v1/hi/`, payload)
}
function api_v1_hi_retrieve(payload) {
  return tstmbkadfaslksdsdAPI.get(`/api/v1/hi/${payload.id}/`)
}
function api_v1_hi_update(payload) {
  return tstmbkadfaslksdsdAPI.put(`/api/v1/hi/${payload.id}/`, payload)
}
function api_v1_hi_partial_update(payload) {
  return tstmbkadfaslksdsdAPI.patch(`/api/v1/hi/${payload.id}/`, payload)
}
function api_v1_hi_destroy(payload) {
  return tstmbkadfaslksdsdAPI.delete(`/api/v1/hi/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstmbkadfaslksdsdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstmbkadfaslksdsdAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return tstmbkadfaslksdsdAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstmbkadfaslksdsdAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstmbkadfaslksdsdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstmbkadfaslksdsdAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstmbkadfaslksdsdAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_hello_list,
  api_v1_hello_create,
  api_v1_hello_retrieve,
  api_v1_hello_update,
  api_v1_hello_partial_update,
  api_v1_hello_destroy,
  api_v1_hi_list,
  api_v1_hi_create,
  api_v1_hi_retrieve,
  api_v1_hi_update,
  api_v1_hi_partial_update,
  api_v1_hi_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
