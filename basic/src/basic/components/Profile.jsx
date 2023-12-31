import ProfileImage from './ProfileImage'

export default function Profile(props) {
    return (
        <div className='profile'>
            { props.image && <ProfileImage image={ props.image } isNew={ props.isNew } />}
            <h1>{ props.name }</h1>
            <h2>{ props.position }</h2>
        </div>
    )
}

// export default function Profile({ image, name, position }) { // Destructuring 가능
//     return (
//         <div className='profile'>
//             <img
//                 className='profile-image'
//                 src={ image }
//                 alt='profile-image'
//             />
//             <h1>{ name }</h1>
//             <h2>{ position }</h2>
//         </div>
//     )
// }