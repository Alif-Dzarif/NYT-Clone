import { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostAsync } from "../store/action/actionCreator";

function Navbar() {
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => {
    return state.post
  })

  useEffect(() => {
    dispatch(fetchPostAsync())
  }, [])

  return (
    <>
      <div className="font-mono mx-[345px] mt-5">
        <div className="flex justify-between my-3">
          <div>
            <p className="font-sans text-sm font-bold mt-3 mb-2">{date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="text-xs font-thin">Today's Paper</p>
          </div>
          <img onClick={() => navigate("/")} className="block h-16 cursor-pointer" src="/NYT.png" />
          <div className="pr-5 text-center">
            Top Category
            {posts.map((post, idx) => (
              idx === 0 && <p key={post.id} >{post.Category.name}</p>
            ))}
          </div>
        </div>
        <hr className="border-gray-400" />
      </div>
      <Outlet />
    </>
  )
}

export default Navbar