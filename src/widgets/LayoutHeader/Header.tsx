import { useState } from "react"
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import Button from "../../shared/ui/Button/Button"
import Modal from "../../shared/ui/Modal/Modal"
import UserTabs from "../UserTabs/UserTabs"

const Header = () => {

    const navigations = [
        { id: "1", from: '/', value: 'Главная' },
        { id: "2", from: '/posts', value: 'Посты' },
        // { id: "3", from: '/users', value: 'Пользователь' },
        { id: "4", from: '/albums', value: 'Альбом' }
    ]
    
    const [open, setOpen] = useState<boolean>(false)

    function changeOpen () {
        setOpen(prev => !prev)
    }

    return (
        <>
            <header>
                <h1>Блог</h1>
                <UserTabs navigations={navigations}/>
                <div>
                    <Button style="nav" value="О проекте" func={changeOpen}/>
                    <ThemeSwitcher />
                </div>
            </header>
            <Modal open={open} >
                <Modal.Header>О проекте</Modal.Header>
                <Modal.Body>Этот проект был создан с целью оточить навыки</Modal.Body>
                <Modal.Footer> <Button value="ОК" func={changeOpen} /> </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header