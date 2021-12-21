import * as tokenService from './tokenService'

const BASE_URL = '/api/posts/'

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createListing = async (listing) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(listing)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

// export const updateListing = async (postId) => {
//   try {
//     const res = await fetch(`${BASE_URL}${postId}`, {
//       method: "PUT",
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': 'Bearer ' + tokenService.getToken()
//       },
//     })
//     const data = await res.json()
//     return data
//   } catch (error){
//     throw error
//   }
// }

export const deleteListing = async (postId) => {
  try {
    await fetch(`${BASE_URL}${postId}`, {
      method: "DELETE",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken()}
    })
  } catch (error) {
    throw error
  }
}

export const getListingById = async (listingId) => {
  try {
    const res = await fetch(`${BASE_URL}${listingId}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}