export default function Profile({ image }) {
    return (
        <img
            className='profile-image'
            src={ image }
            alt='profile-image'
        />
    )
}