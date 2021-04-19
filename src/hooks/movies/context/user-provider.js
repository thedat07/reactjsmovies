
import MoviesContext from './index'
import propTypes from 'prop-types'

const UserProfileProvider = (props) => {
    const infoUser = {
        id: 1,
        user: "admin",
        email: "admin@gmail.com",
        full_name: "The Dat"
    }
    return (
        <MoviesContext.Provider value={infoUser}>{props.children}</MoviesContext.Provider>
    )
}
UserProfileProvider.propTypes={
    children: propTypes.node.isRequired
}
export default UserProfileProvider