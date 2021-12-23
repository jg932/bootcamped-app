import { Profile } from '../models/profile.js'
import { Post } from '../models/post.js'

const create = async (req, res) => {
  console.log('creating posts!')
  try {
    req.body.added_by = req.user.profile
    const post = await new Post(req.body)
    await post.save()
    await Profile.updateOne(
      { _id: req.user.profile },
      { $push: { posts: post } }
    )
    return res.status(201).json(post)
  } catch (err) {
  return res.status(500).json(err)
  }
}

const index = async (req, res) => {
  console.log('indexing')
  try {
    const posts = await Post.find({})
      // .populate('user')
      .sort({ createdAt: 'desc' })
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json(error)     
  }
}


const show = async (req, res) => {
  console.log('showing detail page')
  try {
    const posts = await Post.findById(req.params.id)
    // .populate('user')
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const update = async (req, res) => {
  console.log('updating data', req.body)

  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
    console.log(post)
    return res.status(204).end()
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  console.log('deleting a post');

  try {
    await Post.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}


export {
  create,
  index,
  show,
  update,
  deletePost as delete
}
