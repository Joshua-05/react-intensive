import { useState } from "react"
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import Button from "../../shared/ui/Button/Button"
import Modal from "../../shared/ui/Modal/Modal"

const Header = () => {

    const [open, setOpen] = useState<boolean>(false)

    function changeOpen () {
        setOpen(prev => !prev)
    }

    return (
        <>
            <header>
                <h1>Блог</h1>
                <div>
                    <Button value="О проекте" func={changeOpen}/>
                    <ThemeSwitcher />
                </div>
            </header>
            <Modal open={open}>
                <h4>О проекте:</h4>
                <p>Этот проект был создан с целью оточить навыки</p>
            </Modal>
        </>
    )
}

export default Header