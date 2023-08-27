import { useNavigate } from 'react-router-dom'

export default function SideCard({ post }) {
  const navigate = useNavigate()

  const seeDetail = () => {
    navigate('/news/' + post.id + '/' + post.slug)
  }


  return (
    <div onClick={seeDetail} className='cursor-pointer'>
      <a className="flex flex-col items-center bg-[#fffdfa] mb-3 shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img className="object-cover border border-white w-full h-96 md:h-auto md:w-48" src={post.imgUrl} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">{post.title}</h5>
        </div>
      </a>
      <hr className="bg-gray-950 m-5" />
    </div>
  )
}