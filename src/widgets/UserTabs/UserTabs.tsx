import { NavLink } from "react-router-dom"

interface INavigation {
    id: string,
    from: string,
    value: string
}

interface UserTabsProps {
    navigations: INavigation[]
}

const UserTabs = ({navigations} : UserTabsProps) => {

    return (
        <div>
            { navigations.map( navigation => (
                <NavLink key={navigation.id} to={navigation.from}>{navigation.value}</NavLink>
            )) }
        </div>
    )
}

export default UserTabs