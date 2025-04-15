import ServiceCard from "../../components/ServiceCard"
import alexandrit from '../../Assets/Images/kosmet.JPG'
import video1 from '../../Assets/Videos/Procedure.mp4'

const dataList = [
    {   
        id: 1,
        title : 'Մազերի փոխպատվաստում',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        to: 'transplant',
        image: alexandrit,
    },
    {   
        id: 2,
        title : 'Պերմանենտ',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'permonent',
        image: alexandrit,

    },{   
        id: 3,
        title : 'Ալեքսանդրտային լազերային մազահեռացում',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'alexandrit',
        image: alexandrit,

    },{   
        id: 4,
        title : 'Ներարկումային կոսմետոլոգիա  ',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'kosmetalogia',
        image: alexandrit,

    },{   
        id: 5,
        title : 'Մաշկաբանության խորհրդատվություն',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mashk',
        image: alexandrit,

    },{   
        id: 6,
        title : 'Մաշկի խնամք',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mashkXnamq',
        image: alexandrit,

        
    },{   
        id: 7,
        title : 'Տուրբո սոլյարի',
        description: 'lorem lorem lorem lorem lorem lorem lorem',
        to : 'solary',
        image: alexandrit,

    },{   
        id: 8,
        title : 'Մազանոթային ցանցի լազերային թերապիա',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mazanot',
        image: alexandrit,

    },
    {   
        id: 9,
        title : 'Հակապիգմենտային լազերային թերապիա',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'hakapigment',
        image: alexandrit,

    },{   
        id: 10,
        title : 'Ասեղային մազահեռացում ',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'asexain',
        image: alexandrit,

    },{   
        id: 11,
        title : 'մերսում',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mersum',
        image: alexandrit,

    },
]

export const productionData = {
    video: video1,
    title: 'Expert dermatology care for healthy, radiant skin',
    descriptions: [
        {description: ' range of services is designed to support your health at every stage.'},
        {description : " range of services is designed to support your health at every stage."},
        {description: 'range of services is designed to support your health at every stage.'},
    ],
    lists: [
        {
            name: 'Expert Dermatologists'
        },
        {
            name: 'Expert Dermatologists'
        },{
            name: 'Expert Dermatologists'
        },{
            name: 'Expert Dermatologists'
        },{
            name: 'Expert Dermatologists'
        },{
            name: 'Expert Dermatologists'
        }
    ]
}

export const pendingCards =  dataList.map((date) => <ServiceCard date = {date}/>)