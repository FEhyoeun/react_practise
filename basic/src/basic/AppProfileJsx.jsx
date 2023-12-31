import Profile from './components/Profile'
import AppCss from './App.css'

function AppProfileJsx() {
    const profiles = [
        {
            // 'image': 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            'name': 'june1',
            'position': 'frontend',
            'isNew': true,
        },
        {
            'image': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
            'name': 'june2',
            'position': 'backend',
            'isNew': false,
        },
        {
            'image': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            'name': 'june2',
            'position': 'full',
            'isNew': true,
        }
    ]

    const handleClick = (event) => console.log('event', event)

    return (
        <>
            <button onClick={ handleClick }>클릭</button>
            { profiles.map(profile =>
                <Profile
                    image={ profile.image }
                    name={ profile.name }
                    position={ profile.position }
                    isNew={ profile.isNew }
                />)
            }
        </>
    );
}

export default AppProfileJsx;