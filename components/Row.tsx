import React from 'react'
import { Movie } from '../typings'

interface Props {
    title: string
    movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div>Row</div>
  )
}

export default Row