import React from 'react'
import { useState } from 'react'
import Resize from 'react-image-file-resizer'
import tripStore from '../Store/TripStore'
import { Loader } from 'lucide-react';

const UpLoadFile = (props) => {
    const { formData, setFormData } = props
    const [isLoading, setIsLoading] = useState(false);
    const uploadFiles = tripStore((state) => state.uploadFiles)

    const handleOnChange = (e) => {
        // code
        setIsLoading(true)
        const files = e.target.files
        if (files) {
            setIsLoading(true)
            let allFiles = formData.images  // [] empty array
            for (let i = 0; i < files.length; i++) {
                // console.log(files[i])

                // Validate
                const file = files[i]
                if (!file.type.startsWith('image/')) {
                    alert.error(`File ${file.name} ไม่ใช่รูปภาพ`)
                    continue
                }
                // Image Resize 
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data) => {
                        // endpoint Backend
                        uploadFiles(data)
                            .then((res) => {
                                console.log(res)
                                allFiles.push(res.data)
                                setFormData({
                                    ...formData,
                                    images: allFiles
                                })
                                setIsLoading(false)
                                alert.success('Upload image Sucess!!!')
                                console.log(res.data)
                            })
                            .catch((err) => {
                                console.log(err)
                                setIsLoading(false)
                            })
                    },
                    "base64"
                )


            }
        }
    }

    return (
        <div>
            <div className='flex'>
                {
                    isLoading && <Loader className='w-16 h-16 animate-spin' />
                }

                {/* Image */}
                {
                    formData.images.map((item, index) =>
                        <div className='relative' key={index}>
                            <img
                                className='w-24 h-24 hover:scale-105'
                                src={item.url} />

                            <span
                                onClick={() => handleDelete(item.public_id)}
                                className='absolute top-0 right-0 bg-red-500 p-1 rounded-md'>X</span>
                        </div>
                    )
                }
            </div>

            <input type="file"
                className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                onChange={handleOnChange}
                name='images'
                multiple
            />
        </div>
    )
}

export default UpLoadFile