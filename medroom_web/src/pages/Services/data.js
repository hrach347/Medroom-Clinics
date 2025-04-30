import ServiceCard from "../../components/ServiceCard"
import alexandrit from '../../Assets/Images/alexsandrit.jpg'
import video1 from '../../Assets/Videos/Procedure.mp4'
import transplant from "../../Assets/Images/poxpatvastum.jpg";
import kosmetologia from "../../Assets/Images/kosmetologia.JPG";
import mashk from "../../Assets/Images/mashk3.JPG";
import mashk2 from "../../Assets/Images/mshX.JPG";
import mersum from "../../Assets/Images/Mersumimg.jpg";
import turboSalary from "../../Assets/Images/turboSalary.jpg";
import asexain from "../../Assets/Images/asexain.jpg";
import permonent from "../../Assets/Images/permonent.jpg";


const dataList = [
    {   
        id: 1,
        title : 'Մազերի փոխպատվաստում',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        to: 'transplant',
        image: transplant,
    },
    {   
        id: 2,
        title : 'Պերմանենտ',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'permonent',
        image: permonent,

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
        image: kosmetologia,

    },{   
        id: 5,
        title : 'Մաշկաբանության խորհրդատվություն',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mashkXorhrdatvutyun',
        image: mashk2,
    },{   
        id: 6,
        title : 'Մաշկի խնամք',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mashkXnamq',
        image: mashk,

        
    },{   
        id: 7,
        title : 'Տուրբո սոլյարի',
        description: 'lorem lorem lorem lorem lorem lorem lorem',
        to : 'turboSalary',
        image: turboSalary,

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
        image: asexain,

    },{   
        id: 11,
        title : 'մերսում',
        description: 'lorem lorem lorem lorem lorem lorem lorem ',
        to: 'mersum',
        image: mersum,

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