import { IImage } from '../typings'

function ImageCard({ image } : { image : IImage }) {

    const tags : string[] = image.tags.split(',')
    return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className='px-2 py-4'>
          <div className='font-bold text-black-500 text-xl mb-2'>
            Photo by {image.user} 
          </div>
        </div>
        <ul>
          <li className='ml-2'>
            <strong>Views: </strong>
              {image.views}
          </li>
          <li className='ml-2'>
            <strong>Downloads: </strong>
              {image.downloads}
          </li>
          <li className='ml-2'>
            <strong>Likes: </strong>
              {image.likes}
          </li>
        </ul>
        <div className='px-6 py-4'>
            {tags.map((tag, index) =>
                <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                    #{tag}
                </span>
            )}
        </div>
    </div>
  )
}

export default ImageCard