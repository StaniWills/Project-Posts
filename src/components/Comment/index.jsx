import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function Comment({ id, comment, post_id }) {

  const { delete_comment } = useContext(Context);

  return (
    <div className={s.comment_item} onClick={() => delete_comment(post_id, id)}>
      { comment }
    </div>
  )
}