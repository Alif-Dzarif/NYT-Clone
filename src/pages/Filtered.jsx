import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryAsync, filteredPost } from '../store/action/actionCreator'

export default function Detail() {
  const { catId } = useParams()
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => {
    return state.postFilter
  })
  const { categories, loading } = useSelector((state) => {
    return state.category
  })

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(filteredPost(catId))
    dispatch(fetchCategoryAsync())
  }, [catId])

  if(loading) {
    return (
      <div className="flex justify-center items-baseline h-screen">
          <svg>
            <image href="/loadings.svg" width="100%" height="100%" />
          </svg>
        </div>
    )
  }

  return (
    <>
      <div className="flex justify-center py-2">
        {categories.map((cat) => (
          <a key={cat.id}
            onClick={() => navigate("/news-category/" + cat.id)}
            className="mx-3 cursor-pointer text-black text-sm font-sans font-extralight">{cat.name}</a>
        )
        )}
      </div>
      <div className="mx-[345px]">
        <hr className="border-black" />
        <hr className="border-black my-1" />
      </div>
      <div className='flex justify-center w-screen'>
        <div className='w-[1250px]'>
          <div className='grid grid-cols-3'>
            {posts.map((item, idx) => (
              <div className='col-span-1 flex justify-center' key={item.id}>
                <NewsCard item={item} key={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}