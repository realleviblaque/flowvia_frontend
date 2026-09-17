import { useEffect, useRef, useState } from 'react'
import { SlidesSidebar } from '../SlidesSidebar'
import { Bar } from './Bar'
import './Slide6.css'
import api from '../../../api/axios'

export function Slide6({slideOpen, accountType, goToSlide, user, setUser}) {
  const [imagePreview, setImagePreview] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    const handleReset = () => {
      setImagePreview('')
      setUser(prev => ({
        ...prev,
        profilePicture: ''
      }))
    }
    handleReset();
  }, [accountType, setUser])
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview)
      }
    }
  })
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUser(prev => ({
      ...prev,
      profilePicture: file
    }))
    setImagePreview(URL.createObjectURL(file))
  }
  const handleBtnClick = () => {
    inputRef.current.click();
  }
  const handleImageRemove = () => {
    setUser(prev => ({
      ...prev,
      profilePicture: ''
    }))
    setImagePreview('')
  }
  const validateImageDimensios = (file) => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        URL.revokeObjectURL(image.src);
        if (image.width < 400 || image.height < 400) {
          reject(
            new Error('Profile picture must be at least 400 x 400 pixels')
          )
          return;
        }
        resolve(true)
      }
      image.onerror = () => {
        URL.revokeObjectURL(image.src)
        reject(
          new Error('Unable to read image.')
        )
      }
      image.src = URL.createObjectURL(file)
    })
  }
  const handleSkip = () => {
    setUser(prev => ({
      ...prev,
      profilePicture: ''
    }))
    goToSlide(accountType === 'Freelancer' ? 7 : 5)
  }
  const handleContinue = async () => {
    try {
      let updatedUser = {
        ...user
      }
      if (user.profilePicture instanceof File) {
        const allowedTypes = [
          'image/jpeg',
          'image/png',
          'image/webp'
        ]
        if (!allowedTypes.includes(user.profilePicture.type)) {
          throw new Error('Only JPEG, PNG, and Webp images are allowed.')
        }
        const maxSize = 5 * 1024 * 1024;
        if (user.profilePicture.size > maxSize) {
          throw new Error('Profile picture must be 5 MB or smaller')
        }
        await validateImageDimensios(user.profilePicture)
        const imageData = new FormData();
        imageData.append('image', imageData)
        const imageResponse = await api.post('/upload/profile-picture', imageData);
        const imageUrl = imageResponse.data.imageUrl;
        updatedUser = {
          ...user,
          profilePicture: imageUrl
        }
      }
      setUser(updatedUser)
      goToSlide(accountType === 'Freelancer' ? 7 : 5)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={`slide6-container ${accountType === 'Freelancer' && slideOpen >= 6 ? 'open' :accountType === 'Recruiter' && slideOpen >= 4 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={accountType === 'Freelancer' ? 7 : 5} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide6-view">
        <div className="top">
          <p className="txt">STEP {accountType === 'Freelancer' ? 7 : 5}</p>
          <p className="hd-txt">Add a profile photo</p>
          <p className="txt">Profiles with photos get significantly more views. You can change this at any time from your settings.</p>
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <div className="profile-cover">
                <div className="profile-pic">
                  {imagePreview ? <img src={imagePreview} /> : <i className="fa-regular fa-user"></i>}
                </div>
                <p className="hd-txt">Drop your photo here</p>
                <p className="txt">JPG, PNG or WEBP <span></span> Max 5MB</p>
                <p className="txt">Recommended 400x400px <span></span> Square</p>
              </div>
              <div className="actions">
                <input type="file" accept='image/jpeg,image/png,image/webp' hidden ref={inputRef} onChange={handleImageChange} />
                {imagePreview ? (
                  <>
                    <button onClick={handleImageRemove}>Remove Photo</button>
                    <button className={accountType === 'Freelancer' ? 'free' : 'recru'} onClick={handleContinue}> Continue <i className="fa-solid fa-arrow-right"></i></button>
                  </>
                ) : (
                  <>
                    <button className='upload' onClick={handleBtnClick}><i className="fa-solid fa-upload"></i> Upload Photo</button>
                    <button onClick={handleSkip}>Skip for now <i className="fa-solid fa-arrow-right"></i></button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={() => window.history.back()}><i className="fa-solid fa-arrow-left"></i> Back</button>
        </div>
      </div>
    </div>
  )
}