import { useEffect, useState } from "react";

export function AttachmentPreview({file, onRemove, type}) {
  const [previewUrl, setPreviewUrl] = useState('');
  const [videoThumbnail, setVideoThumbnail] = useState('')
  const fileExtention = file.name?.split('.').pop();

  useEffect(() => {
    const handleMediaUpload = () => {
      if (!file) return;
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
        return () => {
          URL.revokeObjectURL(imageUrl)
        }
      }
      if (file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.src = videoUrl;
        video.preload = 'metadata';
        video.muted = true;
        video.playsInline = true;
        const handleLoadedData = () => {
          video.currentTime = 0;
        }
        const handleSeeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          if (!context) return;
          context.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
          );
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
          setVideoThumbnail(thumbnailUrl);
        };
        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('seeked', handleSeeked);
        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('seeked', handleSeeked);
          URL.revokeObjectURL(videoUrl)
        };
      }
      return undefined;
    }
    handleMediaUpload();
  }, [file])
  const truncatedFilename = (filename, maxLenght = 6) => {
    if (!filename) return '';
    const extention = filename.slice(filename.lastIndexOf('.'));
    const namePart = filename.slice(0, filename.lastIndexOf('.'));
    if (namePart.length >= maxLenght) {
      return `${namePart.slice(0, maxLenght - 3)}..${extention}`;
    }
    return filename;
  }
  if (type === 'media') {
    if (file.type.startsWith('image/')) {
      return (
        <div className="attachment-preview">
          <i className="fa-solid fa-x remove" onClick={onRemove}></i>
          {previewUrl && (
            <img src={previewUrl} alt={file.name} />
          )}
        </div>
      )
    }
    if (file.type.startsWith('video/')) {
      return (
        <div className="attachment-preview video">
          <i className="fa-solid fa-x remove" onClick={onRemove}></i>
          {videoThumbnail && (
            <img src={videoThumbnail} alt={file.name} />
          )}
          <i className="fa-solid fa-play video"></i>
        </div>
      )
    }
  }
  if (type === 'file') {
    if (file.type.startsWith('image/')) {
      return (
        <div className="attachment-preview files">
          <i className="fa-solid fa-x remove" onClick={onRemove}></i>
          <i className='fa-solid fa-image file'></i>
          <span>
            {fileExtention.toUpperCase()}
          </span>
        </div>
      )
    }
    if (file.type.startsWith('video/')) {
      return (
        <div className="attachment-preview files">
          <i className="fa-solid fa-x remove" onClick={onRemove}></i>
          <i className='fa-solid fa-play file'></i>
          <span>
            {fileExtention.toUpperCase()}
          </span>
        </div>
      )
    }
    if (fileExtention === 'mp3') {
      return (
        <div className="attachment-preview files">
          <i className="fa-solid fa-x remove" onClick={onRemove}></i>
          <i className='fa-solid fa-music file mp3'></i>
          <span>
            {fileExtention.toUpperCase()}
          </span>
        </div>
      ) 
    }
    return (
      <div className="attachment-preview files">
        <i className="fa-solid fa-x remove" onClick={onRemove}></i>
        <i className={`fa-solid fa-${fileExtention.includes('mp') ? 'music' : 'file'} file ${fileExtention === 'pdf' ? 'pdf' :fileExtention.includes('doc') ? 'doc' : ''}`}></i>
        <span>
          {truncatedFilename(file.name)}
        </span>
      </div>
    )
  }
}