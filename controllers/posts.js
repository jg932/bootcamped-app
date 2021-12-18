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
      .populate('added_by')
      .sort({ createdAt: 'desc' })
    return res.status(200).json(posts)
  } catch (error) {
    return res.status(500).json(error)
  }
}


const show = async (req, res) => {
  console.log('showing detail page')

  try {
    const post = await Post.findById(req.params.id)
    .populate('added_by')
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const update = async (req, res) => {
  console.log('updating data')

  try {
    await Post.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(res.user.profile)
    profile.posts.remove({ _id: req.params.id })
    await profile.save()
    return res.status (204).end()
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  console.log('deleting a post');

  try {
    await Post.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.posts.remove({ _id: req.params.id })
    await profile.save()
    return res.status(204).end()
  } catch (err) {
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
