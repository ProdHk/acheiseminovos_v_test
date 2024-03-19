import { TbHome, TbCash, TbReportMoney, TbHelp } from 'react-icons/tb'
const menuItems = [
    {
        id: 0,
        name: "Inicio",
        path: "/",
        icon: <TbHome />
    },
    {
        id: 1,
        name: "Comprar",
        path: "/comprar",
        icon: <TbCash />
    },
    {
        id: 2,
        name: "Vender",
        path: "/vender",
        icon: <TbReportMoney />
    },
    {
        id: 3,
        name: "Ajuda",
        path: "/ajuda",
        icon: <TbHelp />
    },
]

export default menuItems