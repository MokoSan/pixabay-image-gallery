import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import ImageCard from '../components/ImageCard'
import ImageSearch from '../components/ImageSearch'

const Home: NextPage = () => {

  const [images, setImages]       = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm]           = useState('')

  useEffect(() => {
    const getData = async() => {
      console.log(`Key: ${process.env.APP_PIXABAY_API_KEY}`)
      const response = await fetch(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
      const result   = await response.json().then((r) => {
        setImages(r.hits)
        setIsLoading(false)
      }).catch(console.error);
    }

    getData()
  }, [term])

  return (
    <> 
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-3xl m-3 text-center'>Moko's Image Gallery</h1>
      <p className='m-3 text-center'>Powered by Pixabay</p>
      <ImageSearch searchText={(term : string) => setTerm(term)} />

      {!isLoading && images.length === 0 && <h1 className='text-3xl text-center mx-auto mt-32'> No Images Found </h1> }
      {isLoading ? <h1 className='text-3xl text-center mx-auto mt-32'> Loading... </h1> : 
        <div className='container mx-auto p-4'>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:grid-cols-1">
            {images.map((image, index) => (
              <ImageCard key={index} image={image} />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Home
