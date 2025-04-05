import { Trash } from "lucide-react";
import React, { useState } from "react"
import ImageUploading from 'react-images-uploading';

interface ImageUploaderProps {
    onChange: (imageList: any) => void;
    error?: string
    register?: any
}
export const ImageUploader = (props: ImageUploaderProps) => {
    const [images, setImages] = useState([]);
    const maxNumber = 3;

    const onChange = (imageList) => {
        setImages(imageList);
        props.onChange(imageList);
    };
    return <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
    >
        {({
            imageList,
            onImageUpload,
            onImageRemove,
            isDragging,
            dragProps,
        }) => (
            <div className="upload__image-wrapper">
                {
                    imageList.length < maxNumber &&
                    <button
                        style={isDragging ? { background: '#cdcdcd' } : undefined}
                        onClick={onImageUpload}
                        type="button"
                        className={`bg-gray-100 border border-dashed border-gray-300 rounded-lg p-8 h-[140px] flex flex-col items-center justify-center w-full ${props.error && '!border-red-500'}`}
                        {...dragProps}
                    >
                        {isDragging ? < p className="text-sm">Solte a imagem para fazer o upload</p> :
                            <>
                                <p className="text-sm">Clique ou arraste uma imagem aqui</p>
                                <p className="text-xs text-gray-400">JPG, PNG até 5MB</p>
                            </>
                        }
                    </button>
                }
                <div className="flex gap-4 justify-around">
                    {imageList.map((image, index) => (
                        <div key={index} className="mt-4 flex gap-2 flex-col relative">
                            <img src={image['data_url']} alt="" width={80} className="h-[80px] object-cover border-yellow-300 border-2 relative" />
                            <div className=" absolute bg-yellow-300 w-7 h-7 rounded-full -top-2 -right-2 flex items-center justify-center">
                                <button type="button" onClick={() => onImageRemove(index)}>
                                    <Trash size={12} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
            </div>
        )}
    </ImageUploading >
}