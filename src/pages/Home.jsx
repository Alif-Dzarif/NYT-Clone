import { useEffect } from 'react'
import Card from "../components/Card";
import SideCard from "../components/SideCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategoryAsync, fetchPostAsync } from '../store/action/actionCreator';
import NewsCard from '../components/NewsCard';


function Home() {
  const dispatch = useDispatch()

  const { posts, loading } = useSelector((state) => {
    return state.post
  })

  const { categories } = useSelector((state) => {
    return state.category
  })
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(fetchPostAsync())
    dispatch(fetchCategoryAsync())
  }, [])

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
      <div className="px-14 mx-72">
        <div>
          <div className="grid grid-cols-6 gap-1 mt-5 mb-3">
            <div className="col-span-4">
              {posts.map((post, idx) => (
                <div key={post.id} className="grid grid-cols-2 gap-10 mr-10">
                  <div className="mb-5">
                    {idx < 2 &&
                      <Card classc post={post} key={post.id} />
                    }
                  </div>
                  {idx === 0 && (
                    <div className="h-auto">
                      <div className="h-10 cursor-pointer" onClick={() => navigate(`/news/${post.id}/${post.slug}`)}>
                        <img src={post.imgUrl} alt="Post" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <hr className="col-span-4 border-black mb-14" />
              <div className='w-full px-20'>
                {posts.map((post, idx) => (
                  idx === Math.round(Math.random() * (posts.length - 1)) && <NewsCard key={post.id} item={post} />
                ))}
              </div>
            </div>
            <div className="flex col-span-2">
              <div className="flex items-center border-l pl-4 border-gray-300">
              </div>
              <div>
                <hr className="border-black" />
                <h1 className="mt-1 mb-5 font-bold text-xl">Health</h1>
                {posts.map((post, idx) => (
                  post.Category.name === "Health" && <SideCard key={post.id} post={post} />
                ))}
                <hr className="border-black" />
                <h1 className="mt-1 mb-5 font-bold text-xl">Business</h1>
                {posts.map((post, idx) => (
                  post.Category.name === "Business" && <SideCard key={post.id} post={post} />
                ))}
                <hr className="border-black" />
                <h1 className="mt-1 mb-5 font-bold text-xl">Tech</h1>
                {posts.map((post, idx) => (
                  post.Category.name === "Tech" && <SideCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home