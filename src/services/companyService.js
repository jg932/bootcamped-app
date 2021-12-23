import * as tokenService from './tokenService'
const BASE_URL = '/api/companies/'

export const getAllCompanies = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createCompany = async (company) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(company)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}  

export const updateCompany = async (companyId) => {
  try {
    const res = await fetch(`${BASE_URL}${companyId}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteCompany = async (companyId) => {
  try {
    await fetch(`${BASE_URL}${companyId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

export const getCompanyById = async (companyId) => {
  try {
    const res = await fetch(`${BASE_URL}${companyId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createContact = async (postId, contact) => {
  console.log('creating contact', contact)
  try {
    const res = await fetch(`${BASE_URL}${postId}/contacts`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(contact)
    })
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}


export const deleteContact = async (postId, contactId) => {
  try {
    const res = await fetch(`${BASE_URL}${postId}/contacts/${contactId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createInterview = async (postId, interview) => {
  console.log('creating interview', interview)
  try {
    const res = await fetch(`${BASE_URL}${postId}/interviews`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(interview)
    })
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

export const deleteInterview = async (postId, interviewId) => {
  try {
    const res = await fetch(`${BASE_URL}${postId}/interviews/${interviewId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}