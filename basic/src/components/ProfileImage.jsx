export default function Profile({ image, isNew }) {
    return (
        <>
            <img
                className='profile-image'
                src={ image }
                alt='profile-image'
            />
            { isNew && (<div className='profile-tag-wrap'><span className='profile-tag-title'>New!</span></div>)}
        </>
    )
}