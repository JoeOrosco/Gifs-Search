import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Piece'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // console.log(newCategory)
    setCategories([newCategory, ...categories]) // setCategories es lo que tenemos que llamar para cambiar las categorias.
    // [...categories -> mantenemos las categorias que teniamos antes, y le agregamos la nueva categoria.]
  }

  return (
    <>
      {/* titulo */}
      <h1 className='title'>Gif Expert App</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories} 
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gifs */}
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}
