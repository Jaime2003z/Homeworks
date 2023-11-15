import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GiftItem } from './GiftItem'

export const GifGrid = ({ category }) => {
  const { images } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      <div>
        {
          images.map((image, key) => {
            return <GiftItem key={key} {...image}></GiftItem>
          })
        }
      </div>
    </>
  )
}