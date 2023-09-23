import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';
import CommentsContainer from '../CommentsContainer';
import { CloseOutlined } from '@ant-design/icons'

export default function Post({ id, title, text, like, comments }) {

  const { change_like, delete_post } = useContext(Context);

  const like_text = like ? 'Liked' : 'Like?';
  const like_style = [s.like_btn, like ? s.like_btn_active : ''].join(' ')

  return (
    <div className={s.post_item}>
      <CloseOutlined className={s.cross_icon} onClick={() => delete_post(id)} />
      <p>{ title }</p>
      <p>{ text }</p>
      <p 
        className={like_style}
        onClick={() => change_like(id)}
      >
        { like_text }
      </p>
      <CommentsContainer comments={comments} post_id={id} />
    </div>
  )
}