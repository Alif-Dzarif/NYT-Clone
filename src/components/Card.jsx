import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Card({ post }) {
  const navigate = useNavigate()

  const seeDetail = () => {
    navigate('/news/' + post.id + '/' + post.slug)
  }

  const truncateText = (text, maxLines) => {
    const lines = text.split(' ');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + '...';
    }
    return text
  };

  return (
    <div onClick={seeDetail} className="whitespace-normal cursor-pointer hover:bg-slate-100">
      <h1 className="font-bold text-lg mb-1">{post.title}</h1>
      <p className="text-md text-slate-500">{truncateText(post.content, 20)}</p>
      <hr className="bg-gray-950 mt-5" />
    </div>
  )
}

export default Card