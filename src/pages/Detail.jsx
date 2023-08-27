import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostDetailAsync } from '../store/action/actionCreator'
export default function Detail() {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => {
    return state.postDetail
  })
  const [date, setDate] = useState(new Date(posts.createdAt))
  const param = useParams()

  useEffect(() => {
    dispatch(fetchPostDetailAsync(param.postId))
  }, [param.postId])

  if (loading) {
    return (
      <div className="flex justify-center items-baseline h-screen">
        <svg>
          <image href="/loadings.svg" width="100%" height="100%" />
        </svg>
      </div>
    )
  }

  return (
    <div className='flex justify-center h-screen'>
      <div className='w-2/4'>
        <div className='text-center font-bold text-3xl mb-5 mt-14'>
          <h1>{posts.title}</h1>
        </div>
        <div className='mb-5 mt-10 pl-10 flex justify-between px-10'>
          <div>
            <div>
            <h1 className='font-bold'>Posted By {posts.User?.username}</h1>
            <h2 className='text-sm'>{date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
            </div>
          </div>
          <div className='flex text-lg mb-10'>
            {posts.Tags?.length > 0 && (
              <>
                <h2 className='mx-5 font-bold'># {posts.Tags[0].name}</h2>
                <h2 className='font-bold'># {posts.Tags[1]?.name}</h2>
              </>
            )}
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={posts.imgUrl} className='h-96 shadow-lg' />
        </div>
        <div className='mt-20 text-lg mb-20 pb-20'>
          <h2 className=' space-x-8 font-medium'>{posts.content}</h2>
        </div>
      </div>
    </div>
  )
}
